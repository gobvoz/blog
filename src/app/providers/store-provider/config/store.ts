import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { loginReducer } from 'features/auth-by-user-name';

import { StateSchema } from './state-schema';

export const createReduxStore = (initialState?: StateSchema, isDev = false) => {
  const rootReducer: ReducersMapObject = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: isDev || __IS_DEV__,
    preloadedState: initialState,
  });
};
