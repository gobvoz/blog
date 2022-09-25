import { useTranslation } from 'react-i18next';

const NAMESPACE_LOCALE = 'main-page';

const MainPage = () => {
  const { t } = useTranslation('main-page');

  return <h1>{t('header', { ns: 'main-page' })}</h1>;
};

export default MainPage;
