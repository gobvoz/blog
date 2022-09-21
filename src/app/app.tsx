import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

import { AppRouter } from './providers/router';
import { useTheme } from './providers/theme-provider/lib/use-theme';

import { classNames } from 'shared/lib/class-names';

import './styles/index.scss';

const Component = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');

  return (
    <div>
      <button onClick={toggleLanguage}>{t('translation')}</button>
      {t('translation')}
    </div>
  );
};

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(['app', theme], {})}>
      <Suspense fallback="Loading translation...">
        <Navbar />
        <Component />
        <section className="page-content">
          <Sidebar />
          <AppRouter />
        </section>
      </Suspense>
    </div>
  );
};
