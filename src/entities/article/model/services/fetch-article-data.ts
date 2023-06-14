import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApiConfig } from 'app/providers/store-provider';

import { Article } from '../types/article';

export const fetchArticleData = createAsyncThunk<Article, string, ThunkApiConfig<string>>(
  'article/fetchArticleData',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`);

      if (!response.data) throw new Error('no data from server');

      return response.data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return rejectWithValue(e.response?.data?.message || e.message || e);
    }
  },
);
