import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { profileActions, selectProfileReadonly, updateProfileData } from 'entities/profile';

import { useAppDispatch, useAppTranslation } from 'shared/libs/hooks';
import { Button } from 'shared/ui/button';

interface Props {
  className?: string;
}

const ProfileButtons: FC<Props> = ({ className }) => {
  const { t } = useAppTranslation();

  const readOnly = useSelector(selectProfileReadonly);

  const dispatch = useAppDispatch();

  const handleEditClick = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);
  const handleUpdateClick = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);
  const handleCancelClick = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  return (
    <div className={className}>
      {readOnly ? (
        <Button onClick={handleEditClick}>{t('edit')}</Button>
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
