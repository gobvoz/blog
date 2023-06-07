import { FC, memo } from 'react';

import { useAppTranslation } from 'shared/libs/hooks';

const ArticleDetailPage: FC = memo(() => {
  const { t } = useAppTranslation('article-detail-page');

  return <h1>{t('header', { ns: 'article-detail-page' })}</h1>;
});

export { ArticleDetailPage };
