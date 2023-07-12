import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/store-provider';

import { Profile } from '../types/profile-schema';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkApiConfig<string>>(
  'profile/fetchProfileData',
  async (userId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Profile>(`profiles/${userId}`);

      if (!response.data) throw new Error('no data from server');

      return response.data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return rejectWithValue(e.response?.data?.message || e.message || e);
    }
  },
);
