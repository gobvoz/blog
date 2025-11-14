import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/store-provider';

import { fetchArticleList } from './fetch-article-list';

import { articleListActions } from '../slice/article-list';
import { selectArticleListInitialized } from '../selectors/select-article-list-initialized';
import { ArticleSortField } from 'entities/article';
import { ArticleTag, SortOrder } from 'shared/constants/ui';

export const initArticlePage = createAsyncThunk<void, URLSearchParams, ThunkApiConfig<string>>(
  'articleList/fetchNextArticleList',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;

    const state = getState();
    const stateInitialized = selectArticleListInitialized(state);

    if (stateInitialized) return;

    const search = searchParams.get('search') || '';
    const order = (searchParams.get('order') as SortOrder) || SortOrder.DESC;
    const sortField =
      (searchParams.get('sortField') as ArticleSortField) || ArticleSortField.CREATED_AT;
    const articleTag = (searchParams.get('articleTag') as ArticleTag) || ArticleTag.ALL;

    dispatch(articleListActions.setSearch(search));
    dispatch(articleListActions.setOrder(order));
    dispatch(articleListActions.setSortField(sortField));
    dispatch(articleListActions.setArticleTag(articleTag));
    dispatch(articleListActions.setInitialized());

    dispatch(fetchArticleList({}));
  },
);
