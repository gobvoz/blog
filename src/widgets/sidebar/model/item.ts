import { AppRoutes } from 'shared/constants/app-routes';

import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ContactsIcon from 'shared/assets/icons/contacts.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
  path: string;
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const sidebarItemList: SidebarItemType[] = [
  { path: AppRoutes.MAIN, name: 'menu-main', Icon: HomeIcon },
  { path: AppRoutes.ABOUT, name: 'menu-about', Icon: AboutIcon },
  { path: AppRoutes.CONTACTS, name: 'menu-contacts', Icon: ContactsIcon },
  { path: AppRoutes.PROFILE, name: 'menu-profile', Icon: ProfileIcon, authOnly: true },
];
