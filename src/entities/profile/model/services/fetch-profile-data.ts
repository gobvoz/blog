import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/store-provider';

import { Profile } from '../types/profile-schema';
import { profileActions } from '../slice/profile-slice';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkApiConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Profile>('/profile');

      if (!response.data) throw new Error('no data from server');

      dispatch(profileActions.setProfile(response.data));

      return response.data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return rejectWithValue(e);
    }
  },
);
