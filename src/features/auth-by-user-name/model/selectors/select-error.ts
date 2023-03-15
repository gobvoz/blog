import { StateSchema } from 'app/providers/store-provider';

export const selectError = (state: StateSchema) => state.loginForm.error;
