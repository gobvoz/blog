import { StateSchema } from 'app/providers/store-provider';
import { selectProfileForm } from '../select-profile-form';
import { Country } from 'entities/country';
import { Profile } from '../../types/profile-schema';
import { Currency } from 'entities/currency';

describe('selectProfileForm', () => {
  it('should return data', () => {
    const formData: Profile = {
      first: 'John',
      last: 'Doe',
      age: '30',
      country: Country.USA,
      city: 'New York',
      currency: Currency.USD,
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: formData,
      },
    };
    expect(selectProfileForm(state as StateSchema)).toEqual(formData);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
