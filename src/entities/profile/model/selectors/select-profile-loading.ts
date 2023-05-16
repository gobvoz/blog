import { StateSchema } from 'app/providers/store-provider';

export const selectProfileLoading = (state: StateSchema) => state.profile?.isLoading;
