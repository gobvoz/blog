import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routerConfig } from '../config/route-config';

const AppRouter = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {routerConfig.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </Suspense>
  );
};

export { AppRouter };
