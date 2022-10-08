import { configureStore } from '@reduxjs/toolkit';
import { StateScheme } from './state-schema';

export const createReduxStore = (initialState?: StateScheme) => {
  return configureStore<StateScheme>({
    reducer: {},
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
