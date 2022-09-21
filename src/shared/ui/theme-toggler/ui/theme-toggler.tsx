import { FC } from 'react';
import { classNames } from 'shared/lib/class-names';

import cls from './theme-toggler.module.scss';

interface IThemeTogglerProps extends React.HTMLProps<HTMLButtonElement> {
  className?: string;
}

const ThemeToggler: FC<IThemeTogglerProps> = props => {
  const { onClick, className } = props;

  return <button className={classNames([cls.themeToggler, className])} onClick={onClick} />;
};

export { ThemeToggler };
