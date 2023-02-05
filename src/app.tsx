import { FC, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { AboutPage } from './pages/about-page';
import { MainPage } from './pages/main-page';

interface IProps {}

export const App: FC<IProps> = props => {
  return (
    <>
      <Link to={'/main'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/main'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
