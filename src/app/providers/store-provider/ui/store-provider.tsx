import { DeepPartial } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from '../config/state-schema';
import { createReduxStore } from '../config/store';

interface IStoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

const StoreProvider: FC<IStoreProviderProps> = props => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };
