import { EntityState } from '@reduxjs/toolkit';

import { ListType } from 'features/list-type-switcher';
import { Article } from 'entities/article/model/types/article';

export interface ArticleListSchema extends EntityState<Article> {
  isLoading: boolean;
  error?: string;

  listType?: ListType;

  page: number;
  limit: number;
  hasMore: boolean;
}
