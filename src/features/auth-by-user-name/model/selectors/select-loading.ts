import { StateSchema } from 'app/providers/store-provider';

export const selectLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
