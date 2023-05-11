import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ThrowErrorButton } from 'app/providers/error-boundary';
import { DynamicModuleLoader, ReducerList } from 'shared/libs/components/dynamic-module-loader';
import { profileReducer } from 'entities/profile';

const reducerList: ReducerList = {
  profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
  const { t } = useTranslation('profile-page');

  return (
    <>
      <h1>{t('page-profile', { ns: 'profile-page' })}</h1>
      <DynamicModuleLoader reducerList={reducerList}>profile info</DynamicModuleLoader>
      <ThrowErrorButton />
    </>
  );
});

export { ProfilePage };
