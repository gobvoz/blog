import { StateSchema } from 'app/providers/store-provider';

export const selectArticleRecommendationListError = (state: StateSchema) =>
  state.articleRecommendationList?.error;
