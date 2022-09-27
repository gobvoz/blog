import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';

import cls from './not-found-page.module.scss';

interface INotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<INotFoundPageProps> = props => {
  const { className } = props;
  const { t } = useTranslation('not-found-page');

  return (
    <h1 className={classNames([cls.notFoundPage, className])}>
      {t('header', { ns: 'not-found-page' })}
    </h1>
  );
};

export { NotFoundPage };
