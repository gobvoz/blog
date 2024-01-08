import { EntityState } from '@reduxjs/toolkit';
import { Article } from '../../model/types/article';

export interface ArticleRecommendationListSchema extends EntityState<Article> {
  isLoading: boolean;
  error?: string;
}
