import { StateSchema } from 'app/providers/store-provider';
import { selectProfileLoading } from '../select-profile-loading';

describe('selectProfileLoading', () => {
  it('should return loading status', () => {
    const loadingStatus = true;

    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: loadingStatus,
      },
    };
    expect(selectProfileLoading(state as StateSchema)).toEqual(loadingStatus);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileLoading(state as StateSchema)).toEqual(undefined);
  });
});
