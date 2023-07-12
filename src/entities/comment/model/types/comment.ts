import { Profile } from 'entities/profile';

export interface Comment {
  id: string;
  profile: Profile;
  body: string;
  createdAt: string;
  updatedAt: string;
  articleId: string;
}
