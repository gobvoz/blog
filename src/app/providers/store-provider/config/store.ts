import { CombinedState, Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router-dom';

import { userReducer } from 'entities/user';

import { api } from 'shared/api/api';
import { rtkApi } from 'shared/api/rtk-api';

import { StateSchema, ThunkExtraArgument } from './state-schema';
import { createReducerManager } from './reducer-manager';
import { restoreScrollReducer } from 'features/restore-scroll';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject,
  navigate?: (to: To, options?: NavigateOptions) => void,
) => {
  const rootReducer: ReducersMapObject = {
    ...asyncReducers,
    user: userReducer,
    restoreScroll: restoreScrollReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArgument: ThunkExtraArgument = {
    api: api,
    navigate,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArgument,
        },
      }).concat(rtkApi.middleware),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
