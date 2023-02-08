import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routerConfig } from '../config/route-config';

const AppRouter = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {routerConfig.map(({ path, element }) => (
          <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />
        ))}
      </Routes>
    </Suspense>
  );
};

export { AppRouter };
