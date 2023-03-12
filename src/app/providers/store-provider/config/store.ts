import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { StateSchema } from './state-schema';
import { userReducer } from 'entities/user';

export const createReduxStore = (initialState?: StateSchema, isDev = false) => {
  const rootReducer: ReducersMapObject = {
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: isDev || __IS_DEV__,
    preloadedState: initialState,
  });
};
