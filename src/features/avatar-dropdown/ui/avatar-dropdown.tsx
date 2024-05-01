import { memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUserAuthData } from 'entities/user/model/selectors/select-user-auth-data';
import { isUserAdmin, isUserModerator, userActions } from 'entities/user';

import { DropdownMenu } from 'shared/ui/popups';
import { Avatar } from 'shared/ui/avatar';
import { useAppDispatch, useAppTranslation } from 'shared/libs/hooks';
import { AppRoutes } from 'shared/constants/app-routes';

interface Props {
  className?: string;
}

const AvatarDropdown = memo((props: Props) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const { t } = useAppTranslation();
  const navigate = useNavigate();

  const userAuthData = useSelector(selectUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isModerator = useSelector(isUserModerator);

  const isAdminPanelAvailable = isAdmin || isModerator;
  const adminPanelItem = isAdminPanelAvailable
    ? [
        {
          content: t('menu-admin-panel'),
          onClick: () => navigate(AppRoutes.ADMIN_PANEL),
        },
      ]
    : [];

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
    navigate(AppRoutes.MAIN);
  }, []);

  const menuOptions = useMemo(() => {
    return {
      trigger: <Avatar small src={userAuthData?.avatar} />,
      itemList: [
        ...adminPanelItem,
        { content: t('menu-settings'), onClick: () => navigate(AppRoutes.SETTINGS) },
        { content: t('menu-profile'), onClick: () => navigate(AppRoutes.PROFILE) },
        { content: t('menu-logout'), onClick: handleLogout },
      ],
    };
  }, [isAdminPanelAvailable, userAuthData, handleLogout, t, navigate]);

  return <DropdownMenu className={className} options={menuOptions} />;
});

export { AvatarDropdown };
