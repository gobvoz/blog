import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

import {
  ReduxStoreWithManager,
  StateSchemaKeys,
} from 'app/providers/store-provider/config/state-schema';

export type ReducerList = { [reducerKey in StateSchemaKeys]?: Reducer };

type reducerListEntry = [StateSchemaKeys, Reducer];

interface Props {
  children: React.ReactNode;
  reducerList: ReducerList;
}

export const DynamicModuleLoader: FC<Props> = props => {
  const { children, reducerList } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducerList).forEach(([reducerKey, reducer]: reducerListEntry) => {
      store.reducerManager.add(reducerKey, reducer);
      dispatch({ type: `@@INIT ${reducerKey}` });
    });

    return () => {
      Object.entries(reducerList).forEach(([reducerKey, _]: reducerListEntry) => {
        store.reducerManager.remove(reducerKey);
        dispatch({ type: `@@DESTROY ${reducerKey}` });
      });
    };
  }, []);

  return <>{children}</>;
};
