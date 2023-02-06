import { lazy } from 'react';

export const ProfilePageLazy = lazy(() =>
  import('./profile-page').then(module => ({ default: module.ProfilePage })),
);
