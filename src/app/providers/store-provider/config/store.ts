import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { userReducer } from 'entities/user';
import { loginReducer } from 'features/auth-by-user-name';

import { StateSchema } from './state-schema';

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject = {
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
