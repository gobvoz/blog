import { lazy } from 'react';

const LoginModalLazy = lazy(() =>
  import('./login-modal').then(module => ({ default: module.LoginModal })),
);

export { LoginModalLazy };
