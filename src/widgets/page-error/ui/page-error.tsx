import { FC, memo } from 'react';

import { classNames } from 'shared/libs/class-names';
import { Button } from 'shared/ui/button';
import { useAppTranslation } from 'shared/libs/hooks';

import cls from './page-error.module.scss';

interface Props {
  className?: string;
}

const PageError: FC<Props> = memo((props: Props) => {
  const { className } = props;
  const { t } = useAppTranslation();

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
});

export { PageError };
