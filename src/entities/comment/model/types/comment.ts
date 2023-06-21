import { User } from 'entities/user';

export interface Comment {
  id: string;
  user: User;
  body: string;
  createdAt: string;
  updatedAt: string;
  articleId: string;
}
