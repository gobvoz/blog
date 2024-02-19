import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { selectUserAuthData } from 'entities/user/model/selectors/select-user-auth-data';

import { AppRoutes } from 'shared/constants/app-routes';
import { UserRole } from 'entities/user/model/types/user-schema';
import { selectUserRoles } from 'entities/user/model/selectors/select-user-roles';

interface Props {
  children: JSX.Element;

  roles?: UserRole[];
}

const RequireAuth = ({ children, roles }: Props): JSX.Element => {
  const auth = useSelector(selectUserAuthData);
  const userRoles = useSelector(selectUserRoles);
  const location = useLocation();

  const userHasRole = useMemo(() => {
    if (!roles) return true;

    return roles.some(role => userRoles.includes(role));
  }, []);

  // FIXME: remove /login check, should work without it
  if (!auth && location.pathname !== '/login') {
    return <Navigate to={AppRoutes.MAIN} state={{ from: location }} replace />;
  }

  // FIXME: add redirect to /forbidden page instead of /main
  if (!userHasRole) {
    return <Navigate to={AppRoutes.MAIN} state={{ from: location }} replace />;
  }

  return children;
};

export { RequireAuth };
