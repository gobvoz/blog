import { StateSchema } from 'app/providers/store-provider';
import { ITEMS_PER_PAGE_GRID } from 'shared/constants/ui';

export const selectArticleListLimit = (state: StateSchema) =>
  state?.articleList?.limit || ITEMS_PER_PAGE_GRID;
