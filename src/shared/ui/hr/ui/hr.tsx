import { memo } from 'react';

import { classNames } from 'shared/libs/class-names/class-names';

import cls from './hr.module.scss';

interface Props {
  className?: string;

  noMargin?: boolean;
}

const Hr = memo((props: Props) => {
  const { className, noMargin, ...otherProps } = props;

  const mods = {
    [cls.noMargin]: noMargin,
  };

  return <hr className={classNames(cls.hr, mods, className)} {...otherProps}></hr>;
});

export { Hr };
