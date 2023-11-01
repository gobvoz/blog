import { StateSchema } from 'app/providers/store-provider';

export const selectArticleListInitialized = (state: StateSchema) =>
  state?.articleList?._initialized || false;
