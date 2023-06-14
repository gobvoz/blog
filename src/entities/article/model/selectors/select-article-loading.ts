import { StateSchema } from 'app/providers/store-provider';

export const selectArticleLoading = (state: StateSchema) => state.article?.isLoading;
