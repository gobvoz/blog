import { StateSchema } from 'app/providers/store-provider';

export const selectNewCommentFormLoading = (state: StateSchema) => state.newCommentForm?.isLoading;
