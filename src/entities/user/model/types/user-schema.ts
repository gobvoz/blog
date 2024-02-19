export enum UserRole {
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
  USER = 'USER',
}

export interface User {
  id: string;
  username: string;
  avatar?: string;
  about?: string;
  roles: UserRole[];
}

export interface UserSchema {
  authData?: User;

  _initialized?: boolean;
}
