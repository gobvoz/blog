import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/class-names';

import cls from './button.module.scss';

export enum ButtonMod {
  TRANSPARENT = 'transparent',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  mod?: ButtonMod;
}

const Button: FC<IButtonProps> = props => {
  const { className, children, mod, ...otherProps } = props;

  return (
    <button className={classNames([cls.button, className, cls[mod]])} {...otherProps}>
      {children}
    </button>
  );
};

export { Button };
