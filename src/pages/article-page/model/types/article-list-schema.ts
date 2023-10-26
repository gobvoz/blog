import { EntityState } from '@reduxjs/toolkit';

import { ArticleListType } from 'entities/article';
import { Article } from 'entities/article/model/types/article';

export interface ArticleListSchema extends EntityState<Article> {
  isLoading: boolean;
  error?: string;

  listType?: ArticleListType;
}
