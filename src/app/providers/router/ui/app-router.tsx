import { Suspense, memo, useCallback, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/page-loader';

import { AppRouteProps, routerConfig } from '../config/route-config';

import { RequireAuth } from './require-auth';

const AppRouter = memo(() => {
  const renderWithAuth = useCallback(({ path, element, authOnly }: AppRouteProps) => {
    return (
      <Route
        key={path}
        path={path}
        element={authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <div className="page-wrapper">
        <Routes>{routerConfig.map(renderWithAuth)}</Routes>
      </div>
    </Suspense>
  );
});

export { AppRouter };
