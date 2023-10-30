import { StateSchema } from 'app/providers/store-provider';

export const selectArticleListPage = (state: StateSchema) => {
  return state?.articleList?.page || 1;
};
