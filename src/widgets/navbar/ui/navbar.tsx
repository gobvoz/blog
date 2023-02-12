import { FC } from 'react';

import { AppLink } from 'shared/ui/app-link';
import { HorizontalMenu } from 'shared/ui/horizontal-menu';
import { classNames } from 'shared/libs/class-names';

import cls from './navbar.module.scss';

interface Props {
  className?: string;
}

const Navbar: FC<Props> = props => {
  const { className } = props;
  return (
    <nav className={classNames([cls.navbar, className])}>
      <HorizontalMenu>
        <AppLink to="/">Main</AppLink>
        <AppLink to="/about">About</AppLink>
        <AppLink to="/contacts">Contacts</AppLink>
        <AppLink to="/profile">Profile</AppLink>
      </HorizontalMenu>
    </nav>
  );
};

export { Navbar };
