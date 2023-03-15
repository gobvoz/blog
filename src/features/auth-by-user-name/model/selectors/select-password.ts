import { StateSchema } from 'app/providers/store-provider';

export const selectPassword = (state: StateSchema) => state.loginForm.password;
