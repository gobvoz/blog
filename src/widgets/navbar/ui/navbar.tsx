import { FC } from 'react';

import { AppLink } from 'shared/ui/app-link';
import { HorizontalMenu } from 'shared/ui/horizontal-menu';
import { ThemeToggler } from 'shared/ui/theme-toggler';
import { classNames } from 'shared/lib/class-names';

import cls from './navbar.module.scss';
import { LanguageToggler } from 'shared/ui/language-toggler';
import { useTranslation } from 'react-i18next';

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
          <AppLink to="/main">{t('menu-main')}</AppLink>
          <AppLink to="/about">{t('menu-about')}</AppLink>
          <AppLink to="/contacts">{t('menu-contacts')}</AppLink>
          <AppLink to="/profile">{t('menu-profile')}</AppLink>
        </HorizontalMenu>
        <ThemeToggler className={cls.marginLeftAuto} />
        <LanguageToggler />
      </div>
    </nav>
  );
};

export { Navbar };
