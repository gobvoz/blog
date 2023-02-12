import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';
import { ContactsPage } from 'pages/contacts-page';
import { ProfilePage } from 'pages/profile-page';

import { AppRoutes } from 'shared/constants/app-routes';

const routerConfig: RouteProps[] = [
  { path: AppRoutes.MAIN, element: <MainPage /> },
  { path: AppRoutes.ABOUT, element: <AboutPage /> },
  { path: AppRoutes.CONTACTS, element: <ContactsPage /> },
  { path: AppRoutes.PROFILE, element: <ProfilePage /> },
  { path: AppRoutes.ERROR, element: <h1>404. Page not found</h1> },
];

export { routerConfig };
