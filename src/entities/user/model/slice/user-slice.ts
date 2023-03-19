import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_TOKEN } from 'shared/constants/localstorage';
import { User, UserSchema } from '../types/user-schema';

const initialState: UserSchema = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: state => {
      const user = localStorage.getItem(LOCAL_STORAGE_TOKEN);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: state => {
      state.authData = undefined;
      localStorage.removeItem(LOCAL_STORAGE_TOKEN);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
