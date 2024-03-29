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

  const errors = validateProfileData(formData as Profile);

  if (Object.keys(errors).length) return rejectWithValue(errors);

  try {
    const response = await extra.api.put<Profile>(`/profiles/${formData?.id}`, formData);

    if (!response.data) throw new Error("Can't update profile data on the server");

    return response.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return rejectWithValue(e.response?.data?.message || e.message || e);
  }
});
