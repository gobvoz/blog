import { StateSchema } from 'app/providers/store-provider';

export const selectArticleData = (state: StateSchema) => state.article?.data;
