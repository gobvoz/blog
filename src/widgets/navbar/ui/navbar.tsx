import { FC } from 'react';

import { useTheme } from 'app/providers/theme-provider';

import { HorizontalMenu } from 'shared/ui/horizontal-menu';

import { AppLink } from 'shared/ui/app-link';
import { ThemeToggler } from 'shared/ui/theme-toggler';
import { classNames } from 'shared/libs/class-names';

import cls from './navbar.module.scss';

interface Props {
  className?: string;
}

const Navbar: FC<Props> = props => {
  const { toggleTheme } = useTheme();

  const { className } = props;
  return (
    <nav className={classNames([cls.navbar, className])}>
      <div className={classNames([cls.wrapper])}>
        <HorizontalMenu>
          <AppLink to="/">Main</AppLink>
          <AppLink to="/about">About</AppLink>
          <AppLink to="/contacts">Contacts</AppLink>
          <AppLink to="/profile">Profile</AppLink>
        </HorizontalMenu>
        <ThemeToggler className={cls.leftMarginAuto} onClick={toggleTheme} />
      </div>
    </nav>
  );
};

export { Navbar };
