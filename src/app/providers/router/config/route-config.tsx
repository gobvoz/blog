import { Navigate, RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';
import { ContactsPage } from 'pages/contacts-page';
import { ProfilePage } from 'pages/profile-page';
import { NotFoundPage } from 'pages/not-found-page';

export enum AppRoutes {
  MAIN = '/main',
  ABOUT = '/about',
  CONTACTS = '/contacts',
  PROFILE = '/profile',
  ERROR = '*',
}

export const routerConfig: RouteProps[] = [
  { path: AppRoutes.MAIN, element: <MainPage /> },
  { path: AppRoutes.ABOUT, element: <AboutPage /> },
  { path: AppRoutes.CONTACTS, element: <ContactsPage /> },
  { path: AppRoutes.PROFILE, element: <ProfilePage /> },
  { path: AppRoutes.ERROR, element: <NotFoundPage /> },
];
