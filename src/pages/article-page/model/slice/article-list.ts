import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/store-provider';

import { ArticleType } from 'entities/article';
import { ArticleListSchema } from '../types/article-list-schema';
import { ArticleListType } from 'entities/article';
import { fetchArticleList } from '../services/fetch-article-list';

const articleListAdapter = createEntityAdapter<ArticleType>({
  selectId: article => article.id,
});

const initialState = articleListAdapter.getInitialState<ArticleListSchema>({
  isLoading: false,
  error: undefined,
  listType: ArticleListType.GRID,

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
    setListType(state, action: PayloadAction<ArticleListType>) {
      state.listType = action.payload;
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
