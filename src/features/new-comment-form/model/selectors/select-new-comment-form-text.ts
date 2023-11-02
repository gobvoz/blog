import { StateSchema } from 'app/providers/store-provider';

export const selectNewCommentFormText = (state: StateSchema) => state.newCommentForm?.text ?? '';
