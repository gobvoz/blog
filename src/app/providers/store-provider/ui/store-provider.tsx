import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from '../config/state-schema';
import { createReduxStore } from '../config/store';

interface Props {
  children: ReactNode;
  initialState?: StateSchema;
  isDev?: boolean;
}

const StoreProvider: FC<Props> = props => {
  const { children, initialState, isDev } = props;

  const store = createReduxStore(initialState, isDev);

  return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };
