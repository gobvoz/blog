import { FC, useEffect, useState } from 'react';

import { Button } from 'shared/ui/button';

import { classNames } from 'shared/libs/class-names';
import { useAppTranslation } from 'shared/libs/hooks';

import cls from './throw-error-button.module.scss';

interface Props {
  className?: string;
}

const ThrowErrorButton: FC<Props> = props => {
  const { className } = props;

  const [error, setError] = useState(false);
  const { t } = useAppTranslation();

  useEffect(() => {
    if (error) {
      throw new Error('test message for ErrorBoundary');
    }
  }, [error]);

  const throwError = () => {
    setError(true);
  };

  return (
    <Button className={classNames(cls.throwErrorButton, className)} onClick={throwError}>
      {t('throw-error-button')}
    </Button>
  );
};

export { ThrowErrorButton };
