import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/libs/class-names';

import cls from './button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;

  primary?: boolean;
  transparent?: boolean;
  appLink?: boolean;
}

const Button: FC<Props> = props => {
  const {
    className,
    children,
    primary,
    transparent,
    appLink,
    type = 'button',
    ...otherProps
  } = props;

  const mods = {
    [cls.primary]: primary,
    [cls.transparent]: transparent,
    [cls.appLink]: appLink,
  };

  return (
    <button className={classNames(cls.button, className, mods)} type={type} {...otherProps}>
      {children}
    </button>
  );
};

export { Button };
