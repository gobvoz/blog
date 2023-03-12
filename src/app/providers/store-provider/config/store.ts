import { configureStore } from '@reduxjs/toolkit';

import { StateSchema } from './state-schema';

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {},
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};