import { CounterSchema } from 'entities/counter';
import { UserScheme } from 'entities/user';
import { LoginSchema } from 'features/auth-by-user-name';

export interface StateSchema {
  counter: CounterSchema;
  user: UserScheme;
  loginForm: LoginSchema;
}
