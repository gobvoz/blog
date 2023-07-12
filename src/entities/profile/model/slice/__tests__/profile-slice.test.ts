import { fetchProfileData } from '../../services/fetch-profile-data';
import { Profile, ProfileSchema } from '../../types/profile-schema';
import { profileActions, profileReducer } from '../profile-slice';

describe('profileSlice test', () => {
  test('should set readonly to true', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };

    expect(profileReducer(state as ProfileSchema, profileActions.setReadOnly(true))).toEqual({
      readonly: true,
    });
  });
  test('should update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { first: 'John', last: 'Doe' } };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ last: 'Smith', age: '30' }),
      ),
    ).toEqual({
      form: { first: 'John', last: 'Smith', age: '30' },
    });
  });
  test('should cancel edit profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: { first: 'Jane', last: 'Smith', city: 'New York' },
      form: { first: 'John', last: 'Doe', age: '30' },
    };

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      data: { first: 'Jane', last: 'Smith', city: 'New York' },
      form: { first: 'Jane', last: 'Smith', city: 'New York' },
      readonly: true,
      validateErrors: undefined,
    });
  });
  // extraReducers
  test('should set isLoading and readonly to true (pending)', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      readonly: false,
      error: 'old error',
      validateErrors: { first: true },
    };
    expect(profileReducer(state as ProfileSchema, fetchProfileData.pending)).toEqual({
      isLoading: true,
      readonly: true,
      error: undefined,
      validateErrors: { first: true },
    });
  });
  test('should set isLoading to false (fulfilled)', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: true,
      error: undefined,
      validateErrors: { first: true },
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        fetchProfileData.fulfilled({ first: 'John', last: 'Doe', age: '30' } as Profile, '', ''),
      ),
    ).toEqual({
      isLoading: false,
      readonly: true,
      data: { first: 'John', last: 'Doe', age: '30' },
      form: { first: 'John', last: 'Doe', age: '30' },
      error: undefined,
      validateErrors: undefined,
    });
  });
  test('should set error (reject)', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: true, error: 'old error' };

    expect(profileReducer(state as ProfileSchema, fetchProfileData.rejected)).toEqual({
      isLoading: false,
      error: undefined,
    });
  });
});
