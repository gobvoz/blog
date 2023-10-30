import { FC, Suspense, useEffect } from 'react';

import { userActions } from 'entities/user';

import { Sidebar } from 'widgets/sidebar';
import { Navbar } from 'widgets/navbar';
import { PageWrapper } from 'widgets/page-wrapper';
import { PageContent } from 'widgets/page-content';
import { PageLoader } from 'widgets/page-loader';

import { ThemeToggler } from 'widgets/theme-toggler';

import { useAppDispatch } from 'shared/libs/hooks';
import { classNames } from 'shared/libs/class-names';

import { useTheme } from './providers/theme-provider/lib/use-theme';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App: FC = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', theme)}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <PageContent>
          <Sidebar />
          <AppRouter />
          <ThemeToggler />
        </PageContent>
      </Suspense>
    </div>
  );
};

export { App };
