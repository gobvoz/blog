import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = memo(() => {
  const { t } = useTranslation('about-page');

  return <h1>{t('page-about', { ns: 'about-page' })}</h1>;
});

export { AboutPage };
