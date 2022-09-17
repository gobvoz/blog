import { Suspense, useContext, useState } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import { MainPageLazy } from './components/main-async';
import { AboutPageLazy } from './components/about-async';
import { ContactsPageLazy } from './components/contacts-async';
import { ProfilePageLazy } from './components/profile-async';

import { useTheme } from './theme/use-theme';

import './index.scss';
import { classNames } from './helpers/class-names';

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
          <Route path={'/main'} element={<MainPageLazy />} />
          <Route path={'/about'} element={<AboutPageLazy />} />
          <Route path={'/contacts'} element={<ContactsPageLazy />} />
          <Route path={'/profile'} element={<ProfilePageLazy />} />
          <Route path={'*'} element={<Navigate to={'/main'} replace={true} />} />
        </Routes>
      </Suspense>

      <button className="button" onClick={toggleTheme}>
        toggle
      </button>
    </div>
  );
};
