import { EntityState } from '@reduxjs/toolkit';

import { ListType } from 'features/list-type-switcher';
import { ArticleType, ArticleSortField } from 'entities/article';
import { SortOrder } from 'shared/constants/ui';

export interface ArticleListSchema extends EntityState<ArticleType> {
  isLoading: boolean;
  error?: string;

  listType?: ListType;

  page: number;
  limit: number;
  hasMore: boolean;

  order: SortOrder;
  sort: ArticleSortField;
  search: string;

  _initialized: boolean;
}
