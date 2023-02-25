import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
  const { t } = useTranslation('about-page');

  return <h1>{t('page-about', { ns: 'about-page' })}</h1>;
};

export { AboutPage };
