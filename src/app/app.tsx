import { Suspense } from 'react';

import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { PageLoader } from 'widgets/page-loader';

import { classNames } from 'shared/lib/class-names/class-names';

import { AppRouter } from './providers/router';
import { useTheme } from './providers/theme-provider/lib/use-theme';
import { ThrowErrorButton } from './providers/error-boundary';

import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames(['app', theme], {})}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <section className="page-content">
          <Sidebar />
          <AppRouter />
        </section>
        <ThrowErrorButton />
      </Suspense>
    </div>
  );
};
