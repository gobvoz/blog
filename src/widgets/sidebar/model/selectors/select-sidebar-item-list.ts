import { createSelector } from '@reduxjs/toolkit';

// FIXME: import should be from public api
// TODO: create new linter plugin for this
import { selectUserAuthData } from 'entities/user/model/selectors/select-user-auth-data';

import { AppRoutes } from 'shared/constants/app-routes';

import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';
import ContactsIcon from 'shared/assets/icons/contacts.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { SidebarItemType } from '../types/sidebar';

const selectSidebarItemList = createSelector(selectUserAuthData, userAuthData => {
  const sidebarItemList: SidebarItemType[] = [
    { path: AppRoutes.MAIN, name: 'menu-main', Icon: HomeIcon },
    { path: AppRoutes.ABOUT, name: 'menu-about', Icon: AboutIcon },
    { path: AppRoutes.ARTICLES, name: 'menu-articles', Icon: ArticlesIcon, authOnly: true },
    { path: AppRoutes.CONTACTS, name: 'menu-contacts', Icon: ContactsIcon },
    {
      path: AppRoutes.PROFILE + '/' + userAuthData?.id,
      name: 'menu-profile',
      Icon: ProfileIcon,
      authOnly: true,
    },
  ];

  return sidebarItemList;
});

export { selectSidebarItemList };
