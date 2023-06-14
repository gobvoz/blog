import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ProfileSchema } from 'entities/profile';
import { UserSchema } from 'entities/user';
import { ArticleSchema } from 'entities/article';
import { LoginSchema } from 'features/auth-by-user-name';
import { NavigateOptions, To } from 'react-router-dom';

export interface StateSchema {
  user: UserSchema;

  // async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  article?: ArticleSchema;
}

export type StateSchemaKeys = keyof StateSchema;
// FIXME: export from public api
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => StateSchema;
  add: (key: StateSchemaKeys, reducer: Reducer) => void;
  remove: (key: StateSchemaKeys) => void;
}
// FIXME: export from public api
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArgument {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkApiConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgument;
  state: StateSchema;
}
