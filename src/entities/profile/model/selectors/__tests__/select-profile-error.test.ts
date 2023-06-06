import { StateSchema } from 'app/providers/store-provider';
import { selectProfileError } from '../select-profile-error';

describe('selectProfileError', () => {
  it('should return the error', () => {
    const error = 'error';

    const state: DeepPartial<StateSchema> = {
      profile: {
        error,
      },
    };
    expect(selectProfileError(state as StateSchema)).toEqual(error);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileError(state as StateSchema)).toEqual(undefined);
  });
});
