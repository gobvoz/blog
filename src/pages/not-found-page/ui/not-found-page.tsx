import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './not-found-page.module.scss';

const NotFoundPage: FC = () => {
  const { t } = useTranslation('not-found-page');

  return <h1 className={cls.notFoundPage}>{t('header', { ns: 'not-found-page' })}</h1>;
};

export { NotFoundPage };
