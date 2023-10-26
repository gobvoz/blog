import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/store-provider';
import { ArticleType } from 'entities/article';

export const fetchArticleList = createAsyncThunk<ArticleType[], void, ThunkApiConfig<string>>(
  'articleList/fetchArticleList',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<ArticleType[]>('/articles', {
        params: {
          _expand: 'profile',
        },
      });

      if (!response.data) throw new Error('no data from server');

      return response.data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return rejectWithValue(e.response?.data?.message || e.message || e);
    }
  },
);
