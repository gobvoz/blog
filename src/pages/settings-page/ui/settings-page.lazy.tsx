import { lazy } from 'react';

const SettingsPageLazy = lazy(() =>
  import('./settings-page').then(module => ({ default: module.SettingsPage })),
);

export { SettingsPageLazy };
