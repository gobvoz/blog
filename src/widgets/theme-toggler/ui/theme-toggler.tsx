import { ButtonHTMLAttributes, FC } from 'react';

import { useTheme } from 'app/providers/theme-provider';

import { classNames } from 'shared/libs/class-names';

import cls from './theme-toggler.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ThemeToggler: FC<Props> = props => {
  const { className } = props;
  const { toggleTheme } = useTheme();

  return <button className={classNames(cls.themeToggler, className)} onClick={toggleTheme} />;
};

export { ThemeToggler };
