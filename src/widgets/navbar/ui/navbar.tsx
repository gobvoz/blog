import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useCollapse } from 'app/providers/collapse-provider';

import { ThemeToggler } from 'widgets/theme-toggler';
import { LanguageToggler } from 'widgets/language-toggler';

import { classNames } from 'shared/libs/class-names';
import { HorizontalMenu } from 'shared/ui/horizontal-menu';
import { AppLink } from 'shared/ui/app-link';
import { AppRoutes } from 'shared/constants/app-routes';

import cls from './navbar.module.scss';

interface Props {
  className?: string;
}

const Navbar: FC<Props> = props => {
  const { collapsed } = useCollapse();
  const { t } = useTranslation();
  const { className } = props;

  const mods = {
    [cls.collapsed]: collapsed,
  };

  return (
    <nav className={classNames(cls.navbar, className)}>
      <div className={classNames(cls.wrapper, mods)}>
        <HorizontalMenu>
          <AppLink to={AppRoutes.MAIN}>{t('menu-main')}</AppLink>
          <AppLink to={AppRoutes.ABOUT}>{t('menu-about')}</AppLink>
          <AppLink to={AppRoutes.CONTACTS}>{t('menu-contacts')}</AppLink>
          <AppLink to={AppRoutes.PROFILE}>{t('menu-profile')}</AppLink>
        </HorizontalMenu>
        <ThemeToggler className={cls.leftMarginAuto} />
        <LanguageToggler />
      </div>
    </nav>
  );
};

export { Navbar };
