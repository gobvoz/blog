import { ButtonHTMLAttributes, FC } from 'react';

import { useTheme } from 'app/providers/theme-provider';
import { Theme } from 'shared/constants/theme';
import { classNames } from 'shared/lib/class-names/class-names';
import { Button, ButtonMod } from 'shared/ui/button';

import cls from './theme-toggler.module.scss';

interface IThemeTogglerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ThemeToggler: FC<IThemeTogglerProps> = props => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      type="button"
      mod={ButtonMod.PRIMARY}
      className={classNames([cls.themeToggler, className])}
      onClick={toggleTheme}>
      {theme === Theme.DARK ? 'D' : 'L'}
    </Button>
  );
};

export { ThemeToggler };
