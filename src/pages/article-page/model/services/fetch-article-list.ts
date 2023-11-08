import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/store-provider';
import { ArticleType } from 'entities/article';
import { selectArticleListLimit } from '../selectors/select-article-list-limit';
import { selectArticleListOrder } from '../selectors/select-article-list-order';
import { selectArticleListSortField } from '../selectors/select-article-list-sort-field';
import { selectArticleListSearch } from '../selectors/select-article-list-search';
import { selectArticleListPage } from '../selectors/select-article-list-page';

interface Props {
  replace?: boolean;
}

export const fetchArticleList = createAsyncThunk<ArticleType[], void, ThunkApiConfig<string>>(
  'articleList/fetchArticleList',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const state = getState();
    const page = selectArticleListPage(state);
    const limit = selectArticleListLimit(state);
    const order = selectArticleListOrder(state);
    const sortField = selectArticleListSortField(state);
    const searchString = selectArticleListSearch(state);

    try {
      const response = await extra.api.get<ArticleType[]>('/articles', {
        params: {
          _expand: 'profile',
          _limit: limit,
          _page: page,
          _sort: sortField,
          _order: order,
          q: searchString,
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
