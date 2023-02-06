import { FC, Suspense } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

import { ProfilePage } from 'pages/profile-page';
import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';
import { ContactsPage } from 'pages/contacts-page';

import { useTheme } from './providers/theme-provider/lib/use-theme';

import { classNames } from 'shared/libs/class-names';

import './styles/index.scss';

interface Props {}

export const App: FC<Props> = props => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(['app', theme])}>
      <Link to={'/profile'}>Profile</Link>
      <Link to={'/main'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contacts'}>Contacts</Link>
      <button onClick={toggleTheme}>theme</button>

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={'/profile'} element={<ProfilePage />} />
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/main'} element={<MainPage />} />
          <Route path={'/contacts'} element={<ContactsPage />} />
          <Route path={'*'} element={<Navigate to={'/main'} replace={true} />} />
        </Routes>
      </Suspense>
    </div>
  );
};
