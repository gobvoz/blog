import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/store-provider';

import { UserRole } from '../const/user-role';

export const selectUserRoles = (state: StateSchema) => state.user.authData?.roles || [];

export const isUserAdmin = createSelector(selectUserRoles, roles => roles.includes(UserRole.ADMIN));

export const isUserModerator = createSelector(selectUserRoles, roles =>
  roles.includes(UserRole.MODERATOR),
);

export const isUserUser = createSelector(selectUserRoles, roles => roles.includes(UserRole.USER));
