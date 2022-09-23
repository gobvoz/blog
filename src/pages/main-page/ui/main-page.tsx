import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main-page');

  return <h1>{t('page-main')}</h1>;
};

export default MainPage;
