import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageToggler } from 'widgets/language-toggler';

import { Menu } from 'shared/ui/menu';
import { Button } from 'shared/ui/button';
import { ButtonMod } from 'shared/ui/button/ui/button';
import { classNames } from 'shared/lib/class-names/class-names';

import { AppLink } from 'shared/ui/app-link';
import { AppRoutes } from 'shared/constants/app-routes';

import cls from './sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

const Sidebar: FC<ISidebarProps> = props => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const toggleHandler = () => setCollapsed(!collapsed);

  return (
    <div
      className={classNames([cls.sidebar, className], { [cls.collapsed]: collapsed })}
      data-testid="sidebar">
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
      <Button
        className={classNames([cls.collapseButton])}
        mod={ButtonMod.PRIMARY}
        onClick={toggleHandler}
        data-testid="sidebar-toggle">
        <span className={classNames([cls.bar], { [cls.animate]: !collapsed })} />
      </Button>
      <LanguageToggler />
    </div>
  );
};

export { Sidebar };
