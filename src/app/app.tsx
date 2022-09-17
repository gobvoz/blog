import { Suspense } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';
import { ContactsPage } from 'pages/contacts-page';
import { ProfilePage } from 'pages/profile-page';

import { classNames } from 'shared/lib/class-names';

import { useTheme } from './providers/theme-provider/lib/use-theme';

import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(['app', theme], {})}>
      <Link to="/main">Main</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/profile">Profile</Link>

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={'/main'} element={<MainPage />} />
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/contacts'} element={<ContactsPage />} />
          <Route path={'/profile'} element={<ProfilePage />} />
          <Route path={'*'} element={<Navigate to={'/main'} replace={true} />} />
        </Routes>
      </Suspense>

      <button className="button" onClick={toggleTheme}>
        toggle
      </button>
    </div>
  );
};
