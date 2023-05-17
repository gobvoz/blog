import { FC, memo } from 'react';
import { useAppTranslation } from 'shared/libs/hooks';

const AboutPage: FC = memo(() => {
  const { t } = useAppTranslation('about-page');

  return <h1>{t('page-about', { ns: 'about-page' })}</h1>;
});

export { AboutPage };
