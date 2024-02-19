import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

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
import { selectUserAuthData } from 'entities/user/model/selectors/select-user-auth-data';

import { DynamicModuleLoader, ReducerList } from 'shared/libs/components/dynamic-module-loader';
import { useAppDispatch, useInitialEffect } from 'shared/libs/hooks';
import { classNames } from 'shared/libs/class-names';

import { ProfileButtons } from './profile-buttons/profile-buttons';
import cls from './editable-profile-card.module.scss';

const reducerList: ReducerList = {
  profile: profileReducer,
};

interface Props {
  className?: string;

  id?: string;
}

const EditableProfileCard: FC<Props> = memo((props: Props) => {
  const { className, id } = props;
  const dispatch = useAppDispatch();

  const formData = useSelector(selectProfileForm);
  const isLoading = useSelector(selectProfileLoading);
  const error = useSelector(selectProfileError);
  const validateErrors = useSelector(selectProfileValidateErrors);
  const readOnly = useSelector(selectProfileReadonly);
  const userData = useSelector(selectUserAuthData);

  const currentUserId = userData?.id;

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

  return (
    <DynamicModuleLoader reducerList={reducerList}>
      <ProfileCard
        className={classNames(cls.profileCard, className)}
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
  );
});

export { EditableProfileCard };
