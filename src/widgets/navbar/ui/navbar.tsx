import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useCollapse } from 'app/providers/collapse-provider';

import { selectUserAuthData } from 'entities/user/model/selectors/select-user-auth-data';

import { LoginModal } from 'features/auth-by-user-name';
import { AvatarDropdown } from 'features/avatar-dropdown';

import { classNames } from 'shared/libs/class-names';
import { Menu } from 'shared/ui/menu';
import { AppLink } from 'shared/ui/app-link';
import { AppRoutes } from 'shared/constants/app-routes';
import { Button } from 'shared/ui/button';
import { useAppTranslation } from 'shared/libs/hooks';

import cls from './navbar.module.scss';
import { NotificationDropdown } from 'entities/notification';

interface Props {
  className?: string;
}

const Navbar: FC<Props> = memo((props: Props) => {
  const { t } = useAppTranslation();

  const userAuthData = useSelector(selectUserAuthData);

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
            <NotificationDropdown />
            <AvatarDropdown />
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
