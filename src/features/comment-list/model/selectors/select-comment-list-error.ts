import { StateSchema } from 'app/providers/store-provider';

export const selectCommentListError = (state: StateSchema) => state?.commentList?.error || '';
