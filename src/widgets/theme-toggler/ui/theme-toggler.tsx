import { ButtonHTMLAttributes, FC, memo } from 'react';

import { useTheme } from 'app/providers/theme-provider';

import { Button } from 'shared/ui/button';
import { classNames } from 'shared/libs/class-names';
import { Theme } from 'shared/constants/theme';

import SunIcon from 'shared/assets/icons/sun.svg';
import MoonIcon from 'shared/assets/icons/moon.svg';

import cls from './theme-toggler.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ThemeToggler: FC<Props> = memo((props: Props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button type="button" className={classNames(cls.themeToggler, className)} onClick={toggleTheme}>
      {theme === Theme.DARK ? <SunIcon className={cls.icon} /> : <MoonIcon className={cls.icon} />}
    </Button>
  );
});

export { ThemeToggler };
