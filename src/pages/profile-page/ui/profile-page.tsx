import { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ThrowErrorButton } from 'app/providers/error-boundary';

import {
  ProfileCard,
  fetchProfileData,
  profileReducer,
  selectProfileData,
  selectProfileError,
  selectProfileLoading,
  selectProfileReadonly,
} from 'entities/profile';

import { DynamicModuleLoader, ReducerList } from 'shared/libs/components/dynamic-module-loader';
import { useAppDispatch, useAppTranslation } from 'shared/libs/hooks';

const reducerList: ReducerList = {
  profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
  const { t } = useAppTranslation('profile-page');

  const data = useSelector(selectProfileData);
  const isLoading = useSelector(selectProfileLoading);
  const error = useSelector(selectProfileError);
  const readOnly = useSelector(selectProfileReadonly);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <>
      <h1>{t('page-profile', { ns: 'profile-page' })}</h1>
      <DynamicModuleLoader reducerList={reducerList}>
        <ProfileCard data={data} isLoading={isLoading} error={error} readonly={readOnly} />
      </DynamicModuleLoader>
      <ThrowErrorButton />
    </>
  );
});

export { ProfilePage };
