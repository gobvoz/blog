import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Profile, ProfileSchema } from '../types/profile-schema';
import { fetchProfileData } from '../services/fetch-profile-data';
import { updateProfileData } from '../services/update-profile-data';

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
    cancelEdit: state => {
      state.readonly = true;
      state.form = { ...state.data };
    },
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProfileData.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = { ...action.payload };
        state.form = { ...action.payload };
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = { ...action.payload };
        state.form = { ...action.payload };
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
