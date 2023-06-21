import { StateSchema } from 'app/providers/store-provider';

export const selectCommentListLoading = (state: StateSchema) =>
  state?.commentList?.isLoading || false;
