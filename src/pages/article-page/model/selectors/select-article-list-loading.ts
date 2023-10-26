import { StateSchema } from 'app/providers/store-provider';

export const selectArticleListLoading = (state: StateSchema) =>
  state?.articleList?.isLoading || false;
