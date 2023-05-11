import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/profile';
import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/auth-by-user-name';

export interface StateSchema {
  user: UserSchema;

  // async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => StateSchema;
  add: (key: StateSchemaKeys, reducer: Reducer) => void;
  remove: (key: StateSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
