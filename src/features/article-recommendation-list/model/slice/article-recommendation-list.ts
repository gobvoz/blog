import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/store-provider';
import { Article } from '../../../../entities/article/model/types/article';

import { ArticleRecommendationListSchema } from './article-recommendation-list-schema';
import { fetchArticleRecommendationList } from '../services/fetch-article-recommendation-list';

const articleRecommendationListAdapter = createEntityAdapter<Article>({
  selectId: article => article.id,
});

const selectArticleRecommendationList = articleRecommendationListAdapter.getSelectors<StateSchema>(
  state => state.articleRecommendationList || articleRecommendationListAdapter.getInitialState(),
);

const initialState =
  articleRecommendationListAdapter.getInitialState<ArticleRecommendationListSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  });

const ArticleRecommendationListSlice = createSlice({
  name: 'articleRecommendationList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchArticleRecommendationList.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticleRecommendationList.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          articleRecommendationListAdapter.setAll(state, action.payload);
          state.error = undefined;
        },
      )
      .addCase(fetchArticleRecommendationList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleRecommendationListAction } = ArticleRecommendationListSlice;
export const { reducer: articleRecommendationListReducer } = ArticleRecommendationListSlice;
export { selectArticleRecommendationList };
