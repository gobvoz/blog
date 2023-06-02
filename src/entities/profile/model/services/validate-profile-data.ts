import { Profile, ValidateErrors } from '../types/profile-schema';

export const validateProfileData = (profile: Profile) => {
  const errors: ValidateErrors = {};

  if (!profile.userId) {
    errors.userId = 'User ID is required';
  }

  if (!profile.first) {
    errors.first = 'First name is required';
  }
  if (!profile.last) {
    errors.last = 'Last name is required';
  }
  if (!profile.age) {
    errors.age = 'Age is required';
  }

  if (!profile.country) {
    errors.country = 'Country is required';
  }
  if (!profile.city) {
    errors.city = 'City is required';
  }
  if (!profile.currency) {
    errors.currency = 'Currency name is required';
  }

  return errors;
};
