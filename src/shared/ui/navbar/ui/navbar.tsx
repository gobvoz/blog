import { FC } from 'react';

import { AppLink } from 'widgets/ui/app-link';
import { HorizontalMenu } from 'widgets/ui/horizontal-menu';
import { classNames } from 'widgets/lib/class-names';

import cls from './navbar.module.scss';

interface INavbarProps {
  className?: string;
}

const Navbar: FC<INavbarProps> = props => {
  const { className } = props;
  return (
    <nav className={classNames([cls.navbar, className])}>
      <HorizontalMenu>
        <AppLink to="/main">Main</AppLink>
        <AppLink to="/about">About</AppLink>
        <AppLink to="/contacts">Contacts</AppLink>
        <AppLink to="/profile">Profile</AppLink>
      </HorizontalMenu>
    </nav>
  );
};

export { Navbar };
