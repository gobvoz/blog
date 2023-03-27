import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

import {
  ReduxStoreWithManager,
  StateSchemaKeys,
} from 'app/providers/store-provider/config/state-schema';

interface Props {
  children: React.ReactNode;
  reducerKey: StateSchemaKeys;
  reducer: Reducer;
}

export const DynamicModuleLoader: FC<Props> = ({ children, reducerKey, reducer }) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    store.reducerManager.add(reducerKey, reducer);
    dispatch({ type: `@@INIT ${reducerKey}` });

    return () => {
      store.reducerManager.remove(reducerKey);
      dispatch({ type: `@@DESTROY ${reducerKey}` });
    };
  }, []);

  return <>{children}</>;
};
