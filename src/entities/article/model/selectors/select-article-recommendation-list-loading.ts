import { StateSchema } from 'app/providers/store-provider';

export const selectArticleRecommendationListLoading = (state: StateSchema) =>
  state.articleRecommendationList?.isLoading || false;
