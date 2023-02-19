import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeToggler } from 'widgets/theme-toggler';
import { LanguageToggler } from 'widgets/language-toggler';

import { classNames } from 'shared/libs/class-names';
import { HorizontalMenu } from 'shared/ui/horizontal-menu';
import { AppLink } from 'shared/ui/app-link';

import cls from './navbar.module.scss';

interface Props {
  className?: string;
}

const Navbar: FC<Props> = props => {
  const { t } = useTranslation();

  const { className } = props;
  return (
    <nav className={classNames(cls.navbar, className)}>
      <div className={cls.wrapper}>
        <HorizontalMenu>
          <AppLink to="/">{t('menu-main')}</AppLink>
          <AppLink to="/about">{t('menu-about')}</AppLink>
          <AppLink to="/contacts">{t('menu-contacts')}</AppLink>
          <AppLink to="/profile">{t('menu-profile')}</AppLink>
        </HorizontalMenu>
        <ThemeToggler className={cls.leftMarginAuto} />
        <LanguageToggler />
      </div>
    </nav>
  );
};

export { Navbar };
