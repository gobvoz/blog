import { EntityState } from '@reduxjs/toolkit';
import { Article } from '../../../../entities/article/model/types/article';

export interface ArticleRecommendationListSchema extends EntityState<Article> {
  isLoading: boolean;
  error?: string;
}
