import { Country } from 'entities/country';
import { Currency } from 'entities/currency';

import { TestAsyncThunk } from 'shared/libs/tests/test-async-thunk';

import { updateProfileData } from '../update-profile-data';
import { Profile } from '../../types/profile-schema';

jest.mock('axios');

describe('updateProfileData', () => {
  it('should to be success', async () => {
    const initialState: Profile = {
      first: 'John',
      last: 'Doe',
      age: '30',
      currency: Currency.USD,
      country: Country.USA,
      city: 'New York',
      username: 'admin',
      avatar: 'string',
    };

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

    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: initialState,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: returnedData }));
    const result = await thunk.dispatchAsync();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('fulfilled');
    expect(result.payload).toEqual(returnedData);
  });
  it('should to be rejected', async () => {
    const initialState: Profile = {
      first: 'John',
      last: 'Doe',
      age: '30',
      currency: Currency.USD,
      country: Country.USA,
      city: 'New York',
      username: 'admin',
      avatar: 'string',
    };

    const returnedData = { status: 403 };

    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: initialState,
      },
    });
    thunk.api.put.mockReturnValue(Promise.reject(returnedData));
    const result = await thunk.dispatchAsync();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('rejected');
    expect(result.payload).toEqual(returnedData);
  });
  it('should to be rejected with validation errors', async () => {
    const initialState: Profile = {
      first: 'J',
      last: 'D',
      age: '15',
      currency: undefined,
      country: undefined,
      city: 'N',
      username: 'a',
      avatar: 'string',
    };

    const returnedData = {
      username: true,
      first: true,
      last: true,
      age: true,
      country: true,
      city: true,
      currency: true,
    };

    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: initialState,
      },
    });
    const result = await thunk.dispatchAsync();

    expect(thunk.api.put).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('rejected');
    expect(result.payload).toEqual(returnedData);
  });
});
