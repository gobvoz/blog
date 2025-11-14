import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/store-provider';

import { fetchArticleList } from './fetch-article-list';

import { articleListActions } from '../slice/article-list';
import { ArticleSortField } from 'entities/article';
import { ArticleTag, SortOrder } from 'shared/constants/ui';
import { ListType } from 'features/list-type-switcher';

interface Props {
  last?: number;
}
export const fetchLastArticle = createAsyncThunk<void, Props, ThunkApiConfig<string>>(
  'articleList/fetchNextArticleList',
  async (props, thunkApi) => {
    const { dispatch } = thunkApi;
    const { last = 3 } = props || {};

    const search = '';
    const order = SortOrder.DESC;
    const sortField = ArticleSortField.CREATED_AT;
    const articleTag = ArticleTag.ALL;

    dispatch(articleListActions.setSearch(search));
    dispatch(articleListActions.setOrder(order));
    dispatch(articleListActions.setSortField(sortField));
    dispatch(articleListActions.setArticleTag(articleTag));
    dispatch(articleListActions.setListType(ListType.GRID));
    dispatch(articleListActions.setLimit(last));
    dispatch(articleListActions.setInitialized());

    dispatch(fetchArticleList({ doNotAddQueryParams: true }));
  },
);
