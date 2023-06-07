import { FC, memo } from 'react';

import { useAppTranslation } from 'shared/libs/hooks';

const ArticlePage: FC = memo(() => {
  const { t } = useAppTranslation('article-page');

  return <h1>{t('header', { ns: 'article-page' })}</h1>;
});

export { ArticlePage };
