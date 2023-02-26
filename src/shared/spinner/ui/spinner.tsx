import { FC } from 'react';

import { classNames } from 'shared/libs/class-names';

import cls from './spinner.module.scss';

interface Props {
  className?: string;
}

const Spinner: FC<Props> = props => {
  const { className } = props;

  return (
    <div className={classNames(cls.spinner, className)}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export { Spinner };
