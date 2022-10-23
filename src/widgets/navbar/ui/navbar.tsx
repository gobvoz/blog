import { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { selectUserAuthData, userActions } from 'entities/user';

import { LoginModal } from 'features/auth-by-user-name';

import { AppLink } from 'shared/ui/app-link';
import { Menu } from 'shared/ui/menu';
import { Button, ButtonMod } from 'shared/ui/button';

import { AppRoutes } from 'shared/constants/app-routes';
import { classNames } from 'shared/lib/class-names/class-names';

import cls from './navbar.module.scss';

interface INavbarProps {
  className?: string;
}

const Navbar: FC<INavbarProps> = props => {
  const { t } = useTranslation();

  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  const authModalOpenHandler = useCallback(() => setAuthModalOpen(true), []);
  const authModalCloseHandler = useCallback(() => setAuthModalOpen(false), []);

  const { className } = props;

  const userAuthData = useSelector(selectUserAuthData);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userActions.logout());
  };

  if (userAuthData) {
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
            <Button mod={ButtonMod.APP_LINK} onClick={logoutHandler}>
              {t('menu-logout')}
            </Button>
          </Menu>
        </div>
      </nav>
    );
  }

  return (
    <nav className={classNames([cls.navbar, className])}>
      <div className={classNames([cls.wrapper])}>
        <Menu horizontal>
          <AppLink to={AppRoutes.ABOUT}>{t('menu-about')}</AppLink>
        </Menu>
        <Menu horizontal>
          <AppLink to={AppRoutes.CONTACTS}>{t('menu-contacts')}</AppLink>
          <Button mod={ButtonMod.APP_LINK} onClick={authModalOpenHandler}>
            {t('menu-login')}
          </Button>
        </Menu>
      </div>
      {isAuthModalOpen && (
        <LoginModal onClose={authModalCloseHandler}>{t('authentication')}</LoginModal>
      )}
    </nav>
  );
};

export { Navbar };
