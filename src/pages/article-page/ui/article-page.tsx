import { FC, memo } from 'react';

import { useAppTranslation } from 'shared/libs/hooks';

const ArticlePage: FC = memo(() => {
  const { t } = useAppTranslation('article-page');

  return (
    <section>
      <h1>{t('article-list-header', { ns: 'article-page' })}</h1>
    </section>
  );
});

export { ArticlePage };
