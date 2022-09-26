import { ButtonHTMLAttributes, FC } from 'react';

import { useTheme } from 'app/providers/theme-provider';
import { classNames } from 'shared/lib/class-names/class-names';

import cls from './theme-toggler.module.scss';

interface IThemeTogglerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ThemeToggler: FC<IThemeTogglerProps> = props => {
  const { className } = props;
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={classNames([cls.themeToggler, className])}
      onClick={toggleTheme}
    />
  );
};

export { ThemeToggler };
