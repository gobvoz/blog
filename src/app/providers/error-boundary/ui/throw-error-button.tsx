import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/button';

import { classNames } from 'shared/lib/class-names/class-names';

import cls from './throw-error-button.module.scss';

interface IThrowErrorButtonProps {
  className?: string;
}

const ThrowErrorButton: FC<IThrowErrorButtonProps> = props => {
  const { className } = props;

  const [error, setError] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (error) {
      throw new Error('test message for ErrorBoundary');
    }
  }, [error]);

  const throwError = () => {
    setError(true);
  };

  return (
    <Button className={classNames([cls.throwErrorButton, className])} onClick={throwError}>
      {t('throw-error-button')}
    </Button>
  );
};

export { ThrowErrorButton };
