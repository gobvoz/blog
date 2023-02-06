import { FC, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { MainPage } from './pages/main-page';
import { AboutPage } from './pages/about-page';

import { useTheme } from './theme/use-them';

import { classNames } from './libs/class-names';
import './styles/index.scss';

interface IProps {}

export const App: FC<IProps> = props => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(['app', theme])}>
      <Link to={'/main'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <button onClick={toggleTheme}>theme</button>

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/main'} element={<MainPage />} />
          <Route path={'*'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
