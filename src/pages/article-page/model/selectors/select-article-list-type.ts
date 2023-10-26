import { StateSchema } from 'app/providers/store-provider';

import { ArticleListType } from 'entities/article';

export const selectArticleListType = (state: StateSchema) =>
  state?.articleList?.listType || ArticleListType.GRID;
