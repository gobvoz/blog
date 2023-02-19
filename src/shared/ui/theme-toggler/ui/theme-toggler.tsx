import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/libs/class-names';

import cls from './theme-toggler.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ThemeToggler: FC<Props> = props => {
  const { onClick, className } = props;

  return <button className={classNames(cls.themeToggler, className)} onClick={onClick} />;
};

export { ThemeToggler };
