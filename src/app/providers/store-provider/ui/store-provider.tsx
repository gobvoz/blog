import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { StateScheme } from '../config/state-schema';
import { createReduxStore } from '../config/store';

interface IStoreProviderProps {
  children: ReactNode;
  initialState?: StateScheme;
}

const StoreProvider: FC<IStoreProviderProps> = props => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };
