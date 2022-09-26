import { Suspense } from 'react';

import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

import { classNames } from 'shared/lib/class-names/class-names';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/theme-provider/lib/use-theme';

import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames(['app', theme], {})}>
      <Suspense fallback="Loading translation...">
        <Navbar />
        <section className="page-content">
          <Sidebar />
          <AppRouter />
        </section>
      </Suspense>
    </div>
  );
};
