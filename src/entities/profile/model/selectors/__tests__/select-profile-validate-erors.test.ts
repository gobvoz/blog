import { StateSchema } from 'app/providers/store-provider';
import { selectProfileValidateErrors } from '../select-profile-validate-errors';
import { ValidateErrors } from '../../types/profile-schema';

describe('selectProfileValidateErrors', () => {
  it('should return validation errors', () => {
    const validateErrors: ValidateErrors = {
      username: true,
      first: true,
      last: true,
      age: true,
      country: true,
      city: true,
      currency: true,
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors,
      },
    };
    expect(selectProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
