import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '../config/state-schema';
import { createReduxStore } from '../config/store';

interface Props {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

const StoreProvider: FC<Props> = props => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };
