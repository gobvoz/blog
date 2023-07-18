import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
  profileActions,
  selectProfileForm,
  selectProfileReadonly,
  updateProfileData,
} from 'entities/profile';

import { useAppDispatch, useAppTranslation } from 'shared/libs/hooks';
import { Button } from 'shared/ui/button';
import { selectUserAuthData } from 'entities/user/model/selectors/select-user-auth-data';

interface Props {
  className?: string;
}

const ProfileButtons: FC<Props> = ({ className }) => {
  const { t } = useAppTranslation();

  //TODO: refactor this to reselect
  const readOnly = useSelector(selectProfileReadonly);
  const authData = useSelector(selectUserAuthData);
  const profileData = useSelector(selectProfileForm);

  const isEditable = authData?.id === profileData?.id;

  const dispatch = useAppDispatch();

  const handleEditClick = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);
  const handleUpdateClick = useCallback(() => {
    if (!profileData?.id) return;

    dispatch(updateProfileData());
  }, [dispatch]);
  const handleCancelClick = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  return (
    <div className={className}>
      {readOnly ? (
        isEditable && <Button onClick={handleEditClick}>{t('edit')}</Button>
      ) : (
        <>
          <Button onClick={handleUpdateClick}>{t('update')}</Button>
          <Button onClick={handleCancelClick} outlineRed>
            {t('cancel')}
          </Button>
        </>
      )}
    </div>
  );
};

export { ProfileButtons };
