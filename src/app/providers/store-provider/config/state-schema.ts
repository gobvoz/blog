import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/auth-by-user-name';

export interface StateSchema {
  user: UserSchema;
  loginForm: LoginSchema;
}
