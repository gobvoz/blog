import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/store-provider';

import { ArticleType } from 'entities/article';
import { ArticleListSchema } from '../types/article-list-schema';
import { ListType } from 'features/list-type-switcher';
import { fetchArticleList } from '../services/fetch-article-list';
import { LOCAL_STORAGE_ARTICLE_LIST_TYPE_KEY } from 'shared/constants/local-storage-key';
import { ITEMS_PER_PAGE_GRID, ITEMS_PER_PAGE_LIST } from 'shared/constants/ui';

const articleListAdapter = createEntityAdapter<ArticleType>({
  selectId: article => article.id,
});

const listType =
  (localStorage.getItem(LOCAL_STORAGE_ARTICLE_LIST_TYPE_KEY) as ListType) || ListType.GRID;

const initialState = articleListAdapter.getInitialState<ArticleListSchema>({
  isLoading: false,
  error: undefined,
  listType: listType,

  ids: [],
  entities: {},
  page: 1,
  limit: listType === ListType.GRID ? ITEMS_PER_PAGE_GRID : ITEMS_PER_PAGE_LIST,
  hasMore: true,

  _initialized: false,
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
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setInitialized(state) {
      state._initialized = true;
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
        articleListAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length > 0;
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
