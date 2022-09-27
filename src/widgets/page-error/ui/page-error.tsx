import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/class-names/class-names';
import { Button } from 'shared/ui/button';

import cls from './page-error.module.scss';

interface IPageErrorProps {
  className?: string;
}

const PageError: FC<IPageErrorProps> = props => {
  const { className } = props;
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div className={classNames([cls.pageError, className])}>
      <p className={cls.errorMessage}>{t('app-error-text')}</p>
      <Button className={cls.errorButton} onClick={reloadPage}>
        {t('app-error-button')}
      </Button>
    </div>
  );
};

export { PageError };
