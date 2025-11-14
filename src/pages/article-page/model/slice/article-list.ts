import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/store-provider';

import { ArticleSortField, ArticleType } from 'entities/article';
import { ArticleListSchema } from '../types/article-list-schema';
import { ListType } from 'features/list-type-switcher';
import { fetchArticleList } from '../services/fetch-article-list';
import { LOCAL_STORAGE_ARTICLE_LIST_TYPE_KEY } from 'shared/constants/local-storage-key';
import {
  ArticleTag,
  ITEMS_PER_PAGE_GRID,
  ITEMS_PER_PAGE_LIST,
  SortOrder,
} from 'shared/constants/ui';

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

  order: SortOrder.DESC,
  sort: ArticleSortField.CREATED_AT,
  search: '',
  selectedTag: ArticleTag.ALL,

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
      state.limit = action.payload === ListType.GRID ? ITEMS_PER_PAGE_GRID : ITEMS_PER_PAGE_LIST;
      localStorage.setItem(LOCAL_STORAGE_ARTICLE_LIST_TYPE_KEY, action.payload);
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setOrder(state, action: PayloadAction<SortOrder>) {
      state.order = action.payload;
    },
    setSortField(state, action: PayloadAction<ArticleSortField>) {
      state.sort = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setArticleTag(state, action: PayloadAction<ArticleTag>) {
      state.selectedTag = action.payload;
    },
    setInitialized(state) {
      state._initialized = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchArticleList.pending, (state, action: any) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg?.replace) {
          articleListAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticleList.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit;
        state.error = undefined;

        if (action.meta.arg?.replace) {
          articleListAdapter.setAll(state, action.payload);
        } else {
          articleListAdapter.addMany(state, action.payload);
        }
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
