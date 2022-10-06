import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { AppLink } from 'shared/ui/app-link';
import { Menu } from 'shared/ui/menu';

import { AppRoutes } from 'shared/constants/app-routes';
import { classNames } from 'shared/lib/class-names/class-names';

import cls from './navbar.module.scss';

interface INavbarProps {
  className?: string;
}

const Navbar: FC<INavbarProps> = props => {
  const { t } = useTranslation();

  const { className } = props;
  return (
    <nav className={classNames([cls.navbar, className])}>
      <div className={classNames([cls.wrapper])}>
        <Menu horizontal>
          <AppLink to={AppRoutes.MAIN}>{t('menu-main')}</AppLink>
          <AppLink to={AppRoutes.ABOUT}>{t('menu-about')}</AppLink>
        </Menu>
        <Menu horizontal>
          <AppLink to={AppRoutes.CONTACTS}>{t('menu-contacts')}</AppLink>
          <AppLink to={AppRoutes.PROFILE}>{t('menu-profile')}</AppLink>
        </Menu>
      </div>
    </nav>
  );
};

export { Navbar };
