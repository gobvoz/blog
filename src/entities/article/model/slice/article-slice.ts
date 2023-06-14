import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticleData } from '../services/fetch-article-data';
import { ArticleSchema } from '../types/article-schema';
import { Article } from '../types/article';

const initialState: ArticleSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchArticleData.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleData.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
        state.data = { ...action.payload };
        state.error = undefined;
      })
      .addCase(fetchArticleData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
