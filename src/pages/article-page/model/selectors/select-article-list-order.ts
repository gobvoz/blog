import { StateSchema } from 'app/providers/store-provider';
import { SortOrder } from 'shared/constants/ui';

export const selectArticleListOrder = (state: StateSchema) =>
  state?.articleList?.order || SortOrder.DESC;
