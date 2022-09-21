import { FC } from 'react';

import { AppLink } from 'shared/ui/app-link';
import { HorizontalMenu } from 'shared/ui/horizontal-menu';
import { ThemeToggler } from 'shared/ui/theme-toggler';
import { classNames } from 'shared/lib/class-names';

import cls from './navbar.module.scss';
import { useTheme } from 'app/providers/theme-provider';

interface INavbarProps {
  className?: string;
}

const Navbar: FC<INavbarProps> = props => {
  const { theme, toggleTheme } = useTheme();

  const { className } = props;
  return (
    <nav className={classNames([cls.navbar, className])}>
      <div className={classNames([cls.wrapper])}>
        <HorizontalMenu>
          <AppLink to="/main">Main</AppLink>
          <AppLink to="/about">About</AppLink>
          <AppLink to="/contacts">Contacts</AppLink>
          <AppLink to="/profile">Profile</AppLink>
        </HorizontalMenu>
        <ThemeToggler className={cls.marginLeftAuto} onClick={toggleTheme} />
      </div>
    </nav>
  );
};

export { Navbar };
