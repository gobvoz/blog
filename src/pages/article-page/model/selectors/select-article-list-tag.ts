import { StateSchema } from 'app/providers/store-provider';
import { ArticleTag } from 'shared/constants/ui';

export const selectArticleListTag = (state: StateSchema) =>
  state?.articleList?.selectedTag || ArticleTag.ALL;
