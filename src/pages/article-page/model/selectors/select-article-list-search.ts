import { StateSchema } from 'app/providers/store-provider';

export const selectArticleListSearch = (state: StateSchema) => state?.articleList?.search;
