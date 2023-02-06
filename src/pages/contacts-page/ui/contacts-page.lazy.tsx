import { lazy } from 'react';

export const ContactsPageLazy = lazy(() =>
  import('./contacts-page').then(module => ({ default: module.ContactsPage })),
);
