import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/store-provider';

import { validateProfileData } from './validate-profile-data';

import { Profile, ValidateErrors } from '../types/profile-schema';
import { selectProfileForm } from '../selectors/select-profile-form';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkApiConfig<string | ValidateErrors>
>('profile/UpdateProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const formData = selectProfileForm(getState());

  console.log(123123123);
  const errors = validateProfileData(formData as Profile);
  console.log(errors);
  if (Object.keys(errors).length) return rejectWithValue(errors);

  try {
    const response = await extra.api.put<Profile>('/profile', formData);

    if (!response.data) throw new Error("Can't update profile data on the server");

    return response.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return rejectWithValue(e.response?.data?.message || e.message || e);
  }
});
