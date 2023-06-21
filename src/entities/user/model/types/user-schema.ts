export interface User {
  id: string;
  username: string;
  avatar?: string;
  about?: string;
}

export interface UserSchema {
  authData?: User;

  _initialized?: boolean;
}
