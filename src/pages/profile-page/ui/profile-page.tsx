import { FC, memo, useCallback } from 'react';
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
  selectProfileValidateErrors,
} from 'entities/profile';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';

import { DynamicModuleLoader, ReducerList } from 'shared/libs/components/dynamic-module-loader';
import { useAppDispatch, useAppTranslation, useInitialEffect } from 'shared/libs/hooks';

import { ProfileButtons } from './profile-buttons/profile-buttons';
import cls from './profile-page.module.scss';
import { useParams } from 'react-router-dom';
import { selectUserAuthData } from 'entities/user/model/selectors/select-user-auth-data';
import { PageWrapper } from 'widgets/page-wrapper';

const reducerList: ReducerList = {
  profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
  const { t } = useAppTranslation('profile-page');
  const dispatch = useAppDispatch();

  const formData = useSelector(selectProfileForm);
  const isLoading = useSelector(selectProfileLoading);
  const error = useSelector(selectProfileError);
  const validateErrors = useSelector(selectProfileValidateErrors);
  const readOnly = useSelector(selectProfileReadonly);
  const userData = useSelector(selectUserAuthData);

  const currentUserId = userData?.id;
  const { id } = useParams<{ id: string }>();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    } else if (currentUserId) {
      dispatch(fetchProfileData(currentUserId));
    }
  }, [dispatch, id, currentUserId]);

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
    (value: Country) => {
      dispatch(profileActions.updateProfile({ country: value }));
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
    (value: Currency) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch],
  );
  // TODO Profile feature with controllers and selectors and validators
  return (
    <PageWrapper>
      <h1>{t('profile-info', { ns: 'profile-page' })}</h1>
      <DynamicModuleLoader reducerList={reducerList}>
        <ProfileCard
          className={cls.profileCard}
          data={formData}
          isLoading={isLoading}
          error={error}
          validateErrors={validateErrors}
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

        {!isLoading && formData && <ProfileButtons className={cls.buttonSection} />}
      </DynamicModuleLoader>
      <ThrowErrorButton />
    </PageWrapper>
  );
});

export { ProfilePage };
