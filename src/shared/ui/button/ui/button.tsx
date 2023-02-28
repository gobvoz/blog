import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/libs/class-names';

import cls from './button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;

  primary?: boolean;
  transparent?: boolean;
}

const Button: FC<Props> = props => {
  const { className, children, primary, transparent, ...otherProps } = props;

  const mods = {
    [cls.primary]: primary,
    [cls.transparent]: transparent,
  };

  return (
    <button className={classNames(cls.button, className, mods)} {...otherProps}>
      {children}
    </button>
  );
};

export { Button };
