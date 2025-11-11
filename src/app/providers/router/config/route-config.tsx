import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';
import { ArticlePage } from 'pages/article-page';
import { ArticleEditPage } from 'pages/article-edit-page';
import { ArticleDetailPage } from 'pages/article-detail-page';
import { ContactsPage } from 'pages/contacts-page';
import { ProfilePage } from 'pages/profile-page';
import { SettingsPage } from 'pages/settings-page';
import { NotFoundPage } from 'pages/not-found-page';

import { AppRoutes } from 'shared/constants/app-routes';
import { AdminPanelPage } from 'pages/admin-panel-page';
import { UserRole } from 'entities/user';

type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
  element: JSX.Element;
};

const routerConfig: AppRouteProps[] = [
  { path: AppRoutes.MAIN, element: <MainPage /> },
  { path: AppRoutes.ABOUT, element: <AboutPage /> },
  { path: AppRoutes.ARTICLES, element: <ArticlePage /> },
  { path: AppRoutes.ARTICLE_CREATE, element: <ArticleEditPage />, authOnly: true },
  { path: AppRoutes.ARTICLE_EDIT, element: <ArticleEditPage />, authOnly: true },
  { path: AppRoutes.ARTICLE_DETAIL, element: <ArticleDetailPage /> },
  { path: AppRoutes.CONTACTS, element: <ContactsPage /> },
  { path: AppRoutes.PROFILE, element: <ProfilePage /> },
  { path: AppRoutes.PROFILE_WITH_ID, element: <ProfilePage /> },
  { path: AppRoutes.SETTINGS, element: <SettingsPage />, authOnly: true },
  {
    path: AppRoutes.ADMIN_PANEL,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MODERATOR],
  },
  { path: AppRoutes.ERROR, element: <NotFoundPage /> },
];

export { routerConfig, type AppRouteProps };
