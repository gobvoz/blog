import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ThrowErrorButton } from 'app/providers/error-boundary';
import { DynamicModuleLoader, ReducerList } from 'shared/libs/components/dynamic-module-loader';
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/profile';
import { useAppDispatch } from 'shared/libs/hooks/use-app-dispatch';

const reducerList: ReducerList = {
  profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
  const { t } = useTranslation('profile-page');

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <>
      <h1>{t('page-profile', { ns: 'profile-page' })}</h1>
      <DynamicModuleLoader reducerList={reducerList}>
        <ProfileCard />
      </DynamicModuleLoader>
      <ThrowErrorButton />
    </>
  );
});

export { ProfilePage };
