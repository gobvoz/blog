import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { userActions } from 'entities/user';

import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { PageLoader } from 'widgets/page-loader';
import { ThemeToggler } from 'widgets/theme-toggler';

import { classNames } from 'shared/lib/class-names/class-names';

import { AppRouter } from './providers/router';
import { useTheme } from './providers/theme-provider/lib/use-theme';

import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames(['app', theme], {})}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <Sidebar />
        <div className="page-content">
          <AppRouter />
        </div>
        <ThemeToggler />
      </Suspense>
    </div>
  );
};
