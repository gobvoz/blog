import { useAppTranslation } from 'shared/libs/hooks';
import { Profile, ValidateErrors } from '../types/profile-schema';
import { useTranslation } from 'react-i18next';

const isNameValid = (name: string | undefined, length = 2): boolean => {
  if (!name) return false;
  if (name.length < length) return false;
  return true;
};

const isNumberValid = (number: string | undefined, length = 2, min = 0, max = 100): boolean => {
  if (!number) return false;
  if (number.length < length) return false;
  if (Number(number) < min) return false;
  if (Number(number) > max) return false;
  return true;
};

const isSelected = (value: string | undefined): boolean => {
  if (!value) return false;
  return true;
};

export const validateProfileData = (profile: Profile) => {
  const errors: ValidateErrors = {};

  !isNameValid(profile.username, 5) && (errors.username = true);
  !isNameValid(profile.first) && (errors.first = true);
  !isNameValid(profile.last) && (errors.last = true);
  !isNumberValid(profile.age, 2, 18) && (errors.age = true);
  !isSelected(profile.country) && (errors.country = true);
  !isNameValid(profile.city) && (errors.city = true);
  !isSelected(profile.currency) && (errors.currency = true);

  return errors;
};
