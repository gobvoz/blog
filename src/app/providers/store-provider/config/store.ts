import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router-dom';

import { userReducer } from 'entities/user';

import { api } from 'shared/api/api';

import { StateSchema } from './state-schema';
import { createReducerManager } from './reducer-manager';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject,
  navigate?: (to: To, options?: NavigateOptions) => void,
) => {
  const rootReducer: ReducersMapObject = {
    ...asyncReducers,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: api,
            navigate,
          },
        },
      }),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
