import { FC, memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ThrowErrorButton } from 'app/providers/error-boundary';

import {
  ProfileCard,
  fetchProfileData,
  profileActions,
  profileReducer,
  selectProfileForm,
  selectProfileError,
  selectProfileLoading,
  selectProfileReadonly,
} from 'entities/profile';

import { DynamicModuleLoader, ReducerList } from 'shared/libs/components/dynamic-module-loader';
import { useAppDispatch, useAppTranslation } from 'shared/libs/hooks';

import { ProfileButtons } from './profile-buttons/profile-buttons';
import cls from './profile-page.module.scss';

const reducerList: ReducerList = {
  profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
  const { t } = useAppTranslation('profile-page');

  const formData = useSelector(selectProfileForm);
  const isLoading = useSelector(selectProfileLoading);
  const error = useSelector(selectProfileError);
  const readOnly = useSelector(selectProfileReadonly);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const handleUsernameChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch],
  );
  const handleAvatarChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch],
  );
  const handleFirstNameChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ first: value }));
    },
    [dispatch],
  );
  const handleLastNameChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ last: value }));
    },
    [dispatch],
  );
  const handleAgeChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ age: value }));
    },
    [dispatch],
  );
  const handleCountryChange = useCallback(
    (value: string) => {
      //dispatch(profileActions.updateProfile({ country: value }));
    },
    [dispatch],
  );
  const handleCityChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch],
  );
  const handleCurrencyChange = useCallback(
    (value: string) => {
      //dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch],
  );

  return (
    <>
      <h1>{t('page-profile', { ns: 'profile-page' })}</h1>
      <DynamicModuleLoader reducerList={reducerList}>
        <ProfileCard
          className={cls.profileCard}
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readOnly}
          onUsernameChange={handleUsernameChange}
          onAvatarChange={handleAvatarChange}
          onFirstNameChange={handleFirstNameChange}
          onLastNameChange={handleLastNameChange}
          onAgeChange={handleAgeChange}
          onCountryChange={handleCountryChange}
          onCityChange={handleCityChange}
          onCurrencyChange={handleCurrencyChange}
        />

        {!isLoading && <ProfileButtons className={cls.buttonSection} />}
      </DynamicModuleLoader>
      <ThrowErrorButton />
    </>
  );
});

export { ProfilePage };
