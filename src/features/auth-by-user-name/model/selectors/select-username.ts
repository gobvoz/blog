import { StateSchema } from 'app/providers/store-provider';

export const selectUsername = (state: StateSchema) => state?.loginForm?.username || '';
