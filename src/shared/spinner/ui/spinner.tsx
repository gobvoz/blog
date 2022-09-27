import { FC } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';

import cls from './spinner.module.scss';

interface ISpinnerProps {
  className?: string;
}

const Spinner: FC<ISpinnerProps> = props => {
  const { className } = props;
  return (
    <div className={classNames([cls.spinner, className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export { Spinner };
