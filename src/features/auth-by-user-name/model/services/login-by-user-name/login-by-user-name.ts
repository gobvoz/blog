import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/user';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  'login/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        username,
        password,
      });

      if (!response.data) throw new Error('no data from server');

      return response.data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  },
);
