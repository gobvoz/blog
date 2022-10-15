import { CounterSchema } from 'entities/counter';
import { UserScheme } from 'entities/user';

export interface StateSchema {
  counter: CounterSchema;
  user: UserScheme;
}
