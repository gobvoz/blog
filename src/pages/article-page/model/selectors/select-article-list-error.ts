import { StateSchema } from 'app/providers/store-provider';

export const selectArticleListError = (state: StateSchema) => state?.articleList?.error || '';
