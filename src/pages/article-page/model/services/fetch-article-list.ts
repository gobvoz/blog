import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/store-provider';
import { ArticleType } from 'entities/article';
import { selectArticleListLimit } from '../selectors/select-article-list-limit';

interface Params {
  page: number;
}

export const fetchArticleList = createAsyncThunk<ArticleType[], Params, ThunkApiConfig<string>>(
  'articleList/fetchArticleList',
  async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const { page } = props;
    const limit = selectArticleListLimit(getState());

    try {
      const response = await extra.api.get<ArticleType[]>('/articles', {
        params: {
          _expand: 'profile',
          _limit: limit,
          _page: page,
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
