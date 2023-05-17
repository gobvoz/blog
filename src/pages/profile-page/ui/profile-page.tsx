import { FC, memo, useEffect } from 'react';

import { ThrowErrorButton } from 'app/providers/error-boundary';
import { DynamicModuleLoader, ReducerList } from 'shared/libs/components/dynamic-module-loader';
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/profile';
import { useAppDispatch, useAppTranslation } from 'shared/libs/hooks';

const reducerList: ReducerList = {
  profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
  const { t } = useAppTranslation('profile-page');

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
