import { memo } from 'react';

import { classNames } from 'shared/libs/class-names/class-names';

import cls from './hr.module.scss';

interface Props {
  className?: string;
}

const Hr = memo((props: Props) => {
  const { className } = props;

  return <hr className={classNames(cls.hr, className)}></hr>;
});

export { Hr };
