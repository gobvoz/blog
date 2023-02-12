import { lazy } from 'react';

const ContactsPageLazy = lazy(() =>
  import('./contacts-page').then(module => ({ default: module.ContactsPage })),
);

export { ContactsPageLazy };
