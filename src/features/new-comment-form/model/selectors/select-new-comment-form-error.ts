import { StateSchema } from 'app/providers/store-provider';

export const selectNewCommentFormError = (state: StateSchema) => state.newCommentForm?.error;
