import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about-page');

  return <h1>{t('page-about')}</h1>;
};

export default AboutPage;
