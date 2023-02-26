import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/libs/class-names';
import { Button } from 'shared/ui/button';

import cls from './page-error.module.scss';

interface Props {
  className?: string;
}

const PageError: FC<Props> = props => {
  const { className } = props;
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.pageError, className)}>
      <p className={cls.errorMessage}>{t('app-error-text')}</p>
      <Button className={cls.errorButton} onClick={reloadPage}>
        {t('app-error-button')}
      </Button>
    </div>
  );
};

export { PageError };
