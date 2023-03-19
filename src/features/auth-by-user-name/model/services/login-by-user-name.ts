import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { User, userActions } from 'entities/user';
import { LOCAL_STORAGE_TOKEN } from 'shared/constants/localstorage';

interface Props {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, Props>(
  'login/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        username,
        password,
      });

      if (!response.data) throw new Error('no data from server');

      localStorage.setItem(LOCAL_STORAGE_TOKEN, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  },
);
