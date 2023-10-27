import { StateSchema } from 'app/providers/store-provider';

import { ListType } from 'features/list-type-switcher';

export const selectArticleListType = (state: StateSchema) =>
  state?.articleList?.listType || ListType.GRID;
