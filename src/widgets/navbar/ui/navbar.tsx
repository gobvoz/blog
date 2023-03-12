import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useCollapse } from 'app/providers/collapse-provider';

import { LoginModal } from 'features/auth-by-user-name';

import { classNames } from 'shared/libs/class-names';
import { Menu } from 'shared/ui/menu';
import { AppLink } from 'shared/ui/app-link';
import { AppRoutes } from 'shared/constants/app-routes';
import { Button } from 'shared/ui/button';

import cls from './navbar.module.scss';

interface Props {
  className?: string;
}

const Navbar: FC<Props> = props => {
  const { collapsed } = useCollapse();
  const { t } = useTranslation();
  const { className } = props;

  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  const handleLoginModalOpen = useCallback(() => setAuthModalOpen(true), []);
  const handleCloseModalClick = (open: boolean) => setAuthModalOpen(open);

  const mods = {
    [cls.collapsed]: collapsed,
  };

  return (
    <nav className={classNames(cls.navbar, className)}>
      <div className={classNames(cls.wrapper, mods)}>
        <Menu>
          <AppLink to={AppRoutes.MAIN}>{t('menu-main')}</AppLink>
          <AppLink to={AppRoutes.ABOUT}>{t('menu-about')}</AppLink>
          <AppLink to={AppRoutes.CONTACTS}>{t('menu-contacts')}</AppLink>
        </Menu>
        <Menu>
          <AppLink to={AppRoutes.PROFILE}>{t('menu-profile')}</AppLink>
          <Button appLink onClick={handleLoginModalOpen}>
            {t('menu-login')}
          </Button>
        </Menu>
      </div>
      {/* eslint-disable i18next/no-literal-string */}
      {isAuthModalOpen && <LoginModal setOpen={handleCloseModalClick} />}
    </nav>
  );
};

export { Navbar };
