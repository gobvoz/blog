import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';

import cls from './button.module.scss';

export enum ButtonMod {
  DEFAULT = 'default',
  TRANSPARENT = 'transparent',
  PRIMARY = 'primary',
  APP_LINK = 'app-link',
  LOADING = 'loading',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  mod?: ButtonMod;
  loading?: boolean;
}

const Button: FC<IButtonProps> = props => {
  const {
    className, children, mod, type = 'button', loading, ...otherProps
  } = props;

  return (
    <button
      className={classNames(
        [cls.button, className, cls[mod]],
        { [cls.loading]: loading },
      )}
      type={type}
      {...otherProps}>
      {children}
    </button>
  );
};

export { Button };
