import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useCollapse } from 'app/providers/collapse-provider';

import { LanguageToggler } from 'widgets/language-toggler';

import { Menu } from 'shared/ui/menu';
import { AppLink } from 'shared/ui/app-link';
import { AppRoutes } from 'shared/constants/app-routes';
import { classNames } from 'shared/libs/class-names';
import { Button } from 'shared/ui/button';

import cls from './sidebar.module.scss';

interface Props {
  className?: string;
}

const Sidebar: FC<Props> = props => {
  const { className } = props;
  const { collapsed, toggleCollapse } = useCollapse();

  const { t } = useTranslation();

  const mods = { [cls.collapsed]: collapsed };
  const buttonMods = { [cls.animate]: !collapsed };

  return (
    <div className={classNames(cls.sidebarWrapper, className, mods)} data-testid="sidebar">
      <div className={cls.sidebar}>
        <Button
          className={classNames(cls.collapseButton)}
          primary
          data-testid="sidebar-toggle"
          onClick={toggleCollapse}>
          <span className={classNames([cls.bar], buttonMods)} />
        </Button>
        <Menu className={cls.sidebarMenu} vertical>
          <AppLink className={cls.sidebarMenuLink} to={AppRoutes.MAIN}>
            {t('menu-main')}
          </AppLink>
          <AppLink className={cls.sidebarMenuLink} to={AppRoutes.ABOUT}>
            {t('menu-about')}
          </AppLink>
          <AppLink className={cls.sidebarMenuLink} to={AppRoutes.CONTACTS}>
            {t('menu-contacts')}
          </AppLink>
          <AppLink className={cls.sidebarMenuLink} to={AppRoutes.PROFILE}>
            {t('menu-profile')}
          </AppLink>
        </Menu>
        <LanguageToggler />
      </div>
    </div>
  );
};

export { Sidebar };
