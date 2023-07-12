import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';
import { ArticlePage } from 'pages/article-page';
import { ArticleDetailPage } from 'pages/article-detail-page';
import { ContactsPage } from 'pages/contacts-page';
import { ProfilePage } from 'pages/profile-page';
import { NotFoundPage } from 'pages/not-found-page';

import { AppRoutes } from 'shared/constants/app-routes';

type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  element: JSX.Element;
};

const routerConfig: AppRouteProps[] = [
  { path: AppRoutes.MAIN, element: <MainPage /> },
  { path: AppRoutes.ABOUT, element: <AboutPage /> },
  { path: AppRoutes.ARTICLES, element: <ArticlePage />, authOnly: true },
  { path: AppRoutes.ARTICLE_DETAIL, element: <ArticleDetailPage />, authOnly: true },
  { path: AppRoutes.CONTACTS, element: <ContactsPage /> },
  { path: AppRoutes.PROFILE, element: <ProfilePage />, authOnly: true },
  { path: AppRoutes.PROFILE_WITH_ID, element: <ProfilePage />, authOnly: true },
  { path: AppRoutes.ERROR, element: <NotFoundPage /> },
];

export { routerConfig, AppRouteProps };
