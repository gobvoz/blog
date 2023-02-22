import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  const { t } = useTranslation('main-page');

  return <h1>{t('page-main')}</h1>;
};

export { MainPage };
