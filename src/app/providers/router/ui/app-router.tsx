import { Suspense, memo, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/page-loader';

import { routerConfig } from '../config/route-config';
import { useSelector } from 'react-redux';
import { selectUserAuthData } from 'entities/user/model/selectors/select-user-auth-data';

const AppRouter = memo(() => {
  const isAuth = useSelector(selectUserAuthData);

  const routeList = useMemo(() => {
    return routerConfig.map(({ path, element, authOnly }) => {
      if (authOnly && !isAuth) {
        return null;
      }

      return (
        <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />
      );
    });
  }, [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{routeList}</Routes>
    </Suspense>
  );
});

export { AppRouter };
