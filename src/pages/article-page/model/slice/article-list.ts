import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/store-provider';

import { ArticleType } from 'entities/article';
import { ArticleListSchema } from '../types/article-list-schema';
import { ListType } from 'features/list-type-switcher';
import { fetchArticleList } from '../services/fetch-article-list';
import { LOCAL_STORAGE_ARTICLE_LIST_TYPE_KEY } from 'shared/constants/local-storage-key';

const articleListAdapter = createEntityAdapter<ArticleType>({
  selectId: article => article.id,
});

const initialState = articleListAdapter.getInitialState<ArticleListSchema>({
  isLoading: false,
  error: undefined,
  listType:
    (localStorage.getItem(LOCAL_STORAGE_ARTICLE_LIST_TYPE_KEY) as ListType) || ListType.GRID,

  ids: [],
  entities: {},
});

const getArticleList = articleListAdapter.getSelectors<StateSchema>(
  state => state.articleList || articleListAdapter.getInitialState(),
);

const articleListSlice = createSlice({
  name: 'article-list',
  initialState,
  reducers: {
    setListType(state, action: PayloadAction<ListType>) {
      state.listType = action.payload;
      localStorage.setItem(LOCAL_STORAGE_ARTICLE_LIST_TYPE_KEY, action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchArticleList.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleList.fulfilled, (state, action: PayloadAction<ArticleType[]>) => {
        state.isLoading = false;
        articleListAdapter.setAll(state, action.payload);
        state.error = undefined;
      })
      .addCase(fetchArticleList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleListActions } = articleListSlice;
export const { reducer: articleListReducer } = articleListSlice;
export { getArticleList };
