import { UserRole } from '../const/user-role';

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
