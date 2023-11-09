import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/store-provider';

import { fetchArticleList } from './fetch-article-list';

import { articleListActions } from '../slice/article-list';
import { selectArticleListInitialized } from '../selectors/select-article-list-initialized';

export const initArticlePage = createAsyncThunk<void, void, ThunkApiConfig<string>>(
  'articleList/fetchNextArticleList',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;

    const state = getState();
    const stateInitialized = selectArticleListInitialized(state);

    if (stateInitialized) return;

    dispatch(articleListActions.setInitialized());
    dispatch(fetchArticleList({}));
  },
);
