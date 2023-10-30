import { StateSchema } from 'app/providers/store-provider';

export const selectArticleListHasMore = (state: StateSchema) => state?.articleList?.hasMore;
