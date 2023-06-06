import { Country } from 'entities/country';
import { Currency } from 'entities/currency';

import { TestAsyncThunk } from 'shared/libs/tests/test-async-thunk';

import { fetchProfileData } from '../fetch-profile-data';
import { Profile } from '../../types/profile-schema';

jest.mock('axios');

describe('fetchProfileData', () => {
  it('should to be success', async () => {
    const returnedData: Profile = {
      first: 'John',
      last: 'Doe',
      age: '30',
      currency: Currency.USD,
      country: Country.USA,
      city: 'New York',
      username: 'admin',
      avatar: 'string',
    };

    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: returnedData }));
    const result = await thunk.dispatchAsync();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('fulfilled');
    expect(result.payload).toEqual(returnedData);
  });
  it('should to be rejected', async () => {
    const returnedData = { e: 'error' };

    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.reject(returnedData));
    const result = await thunk.dispatchAsync();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('rejected');
    expect(result.payload).toEqual(returnedData);
  });
});
