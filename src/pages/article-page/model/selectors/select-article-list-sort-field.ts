import { StateSchema } from 'app/providers/store-provider';
import { ArticleSortField } from 'entities/article';

export const selectArticleListSortField = (state: StateSchema) =>
  state?.articleList?.sort || ArticleSortField.CREATED_AT;
