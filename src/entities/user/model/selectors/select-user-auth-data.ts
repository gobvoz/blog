import { StateSchema } from 'app/providers/store-provider';

export const selectUserAuthData = (state: StateSchema) => state.user.authData;
