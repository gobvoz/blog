import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/store-provider';

import { User, userActions } from 'entities/user';
import { LOCAL_STORAGE_TOKEN } from 'shared/constants/localstorage';

interface Props {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, Props, ThunkApiConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    const { username, password } = authData;
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.post('/login', { username, password });

      if (!response.data) throw new Error('no data from server');

      localStorage.setItem(LOCAL_STORAGE_TOKEN, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return rejectWithValue(e);
    }
  },
);
