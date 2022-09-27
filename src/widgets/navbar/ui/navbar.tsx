import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeToggler } from 'widgets/theme-toggler';
import { LanguageToggler } from 'widgets/language-toggler';
import { AppLink } from 'shared/ui/app-link';
import { HorizontalMenu } from 'shared/ui/horizontal-menu';

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
        <HorizontalMenu>
          <AppLink to={AppRoutes.MAIN}>{t('menu-main')}</AppLink>
          <AppLink to={AppRoutes.ABOUT}>{t('menu-about')}</AppLink>
          <AppLink to={AppRoutes.CONTACTS}>{t('menu-contacts')}</AppLink>
          <AppLink to={AppRoutes.PROFILE}>{t('menu-profile')}</AppLink>
        </HorizontalMenu>
        <ThemeToggler className={cls.marginLeftAuto} />
        <LanguageToggler />
      </div>
    </nav>
  );
};

export { Navbar };
