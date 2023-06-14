import { StateSchema } from 'app/providers/store-provider';

export const selectArticleError = (state: StateSchema) => state.article?.error;
