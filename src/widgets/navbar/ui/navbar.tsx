import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useCollapse } from 'app/providers/collapse-provider';

import { selectUserAuthData } from 'entities/user/model/selectors/select-user-auth-data';
import { isUserAdmin, isUserModerator, userActions } from 'entities/user';

import { LoginModal } from 'features/auth-by-user-name';

import { classNames } from 'shared/libs/class-names';
import { Menu } from 'shared/ui/menu';
import { AppLink } from 'shared/ui/app-link';
import { AppRoutes } from 'shared/constants/app-routes';
import { Button } from 'shared/ui/button';
import { useAppDispatch, useAppTranslation } from 'shared/libs/hooks';
import { Avatar } from 'shared/ui/avatar';
import { DropdownMenu, Popover } from 'shared/ui/popups';
import NotificationIcon from 'shared/assets/icons/notifications.svg';

import cls from './navbar.module.scss';
import { NotificationList } from 'entities/notification';

interface Props {
  className?: string;
}

const Navbar: FC<Props> = memo((props: Props) => {
  const dispatch = useAppDispatch();
  const { t } = useAppTranslation();
  const navigate = useNavigate();

  const userAuthData = useSelector(selectUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isModerator = useSelector(isUserModerator);

  const { collapsed } = useCollapse();
  const { className } = props;

  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  useEffect(() => {
    if (userAuthData) {
      setAuthModalOpen(false);
    }
  }, [userAuthData]);

  const handleLoginModalOpen = useCallback(() => setAuthModalOpen(true), []);
  const handleCloseModalClick = useCallback(() => setAuthModalOpen(false), []);
  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
    navigate(AppRoutes.MAIN);
  }, []);

  const isAdminPanelAvailable = isAdmin || isModerator;
  const adminPanelItem = isAdminPanelAvailable
    ? [
        {
          content: t('menu-admin-panel'),
          onClick: () => navigate(AppRoutes.ADMIN_PANEL),
        },
      ]
    : [];
  const menuOptions = useMemo(() => {
    return {
      trigger: <Avatar small src={userAuthData?.avatar} />,
      itemList: [
        ...adminPanelItem,
        { content: t('menu-settings'), onClick: () => navigate(AppRoutes.SETTINGS) },
        { content: t('menu-profile'), onClick: () => navigate(AppRoutes.PROFILE) },
        { content: t('menu-logout'), onClick: handleLogout },
      ],
    };
  }, [isAdminPanelAvailable, userAuthData, handleLogout, t, navigate]);

  const mods = {
    [cls.collapsed]: collapsed,
  };

  if (userAuthData) {
    return (
      <nav className={classNames(cls.navbar, className)}>
        <div className={classNames(cls.wrapper, mods)}>
          <Menu>
            <AppLink to={AppRoutes.MAIN}>{t('menu-main')}</AppLink>
            <AppLink to={AppRoutes.ABOUT}>{t('menu-about')}</AppLink>
          </Menu>
          <div className={cls.buttons}>
            <Popover trigger={<NotificationIcon />}>
              <NotificationList />
            </Popover>
            <DropdownMenu options={menuOptions} />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={classNames(cls.navbar, className)}>
      <div className={classNames(cls.wrapper, mods)}>
        <Menu>
          <AppLink to={AppRoutes.MAIN}>{t('menu-main')}</AppLink>
          <AppLink to={AppRoutes.ABOUT}>{t('menu-about')}</AppLink>
        </Menu>
        <Menu>
          <AppLink to={AppRoutes.CONTACTS}>{t('menu-contacts')}</AppLink>
          <Button appLink onClick={handleLoginModalOpen}>
            {t('menu-login')}
          </Button>
        </Menu>
      </div>
      {isAuthModalOpen && <LoginModal setOpen={handleCloseModalClick} />}
    </nav>
  );
});

export { Navbar };
