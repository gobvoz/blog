import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NewCommentFormSchema } from '../types/new-comment-form-schema';

const initialState: NewCommentFormSchema = {
  isLoading: false,
  text: '',
  error: '',
};

const NewCommentFormSlice = createSlice({
  name: 'newCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  extraReducers: builder => {
    // builder
    //   .addCase(addNewComment.pending, state => {
    //     state.error = undefined;
    //     state.isLoading = true;
    //   })
    //   .addCase(loginByUsername.fulfilled, state => {
    //     state.isLoading = false;
    //   })
    //   .addCase(loginByUsername.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action?.payload?.toString();
    //   });
  },
});

export const { actions: newCommentFormActions } = NewCommentFormSlice;
export const { reducer: newCommentFormReducer } = NewCommentFormSlice;
