import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { selectUserAuthData } from 'entities/user/model/selectors/select-user-auth-data';

import { AppRoutes } from 'shared/constants/app-routes';

const RequireAuth = ({ children }: { children: JSX.Element }): JSX.Element => {
  const auth = useSelector(selectUserAuthData);
  const location = useLocation();

  if (!auth && location.pathname !== '/login') {
    return <Navigate to={AppRoutes.MAIN} state={{ from: location }} replace />;
  }

  return children;
};

export { RequireAuth };
