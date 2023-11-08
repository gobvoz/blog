import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/store-provider';

import { fetchArticleList } from './fetch-article-list';

import { selectArticleListPage } from '../selectors/select-article-list-page';
import { selectArticleListHasMore } from '../selectors/select-article-list-has-more';
import { selectArticleListLoading } from '../selectors/select-article-list-loading';
import { articleListActions } from '../slice/article-list';

export const fetchNextArticleList = createAsyncThunk<void, void, ThunkApiConfig<string>>(
  'articleList/fetchNextArticleList',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;

    const state = getState();
    const page = selectArticleListPage(state);
    const hasMore = selectArticleListHasMore(state);
    const isLoading = selectArticleListLoading(state);

    if (hasMore && !isLoading) {
      dispatch(articleListActions.setPage(page + 1));
      dispatch(fetchArticleList());
    }
  },
);
