import { Country } from 'entities/country';
import { Currency } from 'entities/currency';

import { validateProfileData } from '../validate-profile-data';
import { Profile, ValidateErrors } from '../../types/profile-schema';

jest.mock('axios');

describe('validateProfileData', () => {
  it('should to be success', () => {
    const data: Profile = {
      first: 'John',
      last: 'Doe',
      age: '30',
      currency: Currency.USD,
      country: Country.USA,
      city: 'New York',
      username: 'admin',
      avatar: 'string',
    };

    const returnedData: ValidateErrors = {};

    const result = validateProfileData(data);

    expect(result).toEqual(returnedData);
  });
  it('should to be validation errors', () => {
    const data: Profile = {};

    const returnedData: ValidateErrors = {
      username: true,
      first: true,
      last: true,
      age: true,
      currency: true,
      city: true,
      country: true,
    };

    const result = validateProfileData(data);

    expect(result).toEqual(returnedData);
  });
});
