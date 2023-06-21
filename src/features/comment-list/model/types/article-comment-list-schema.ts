import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/comment';

export interface ArticleCommentListSchema extends EntityState<Comment> {
  isLoading: boolean;
  error?: string;
}
