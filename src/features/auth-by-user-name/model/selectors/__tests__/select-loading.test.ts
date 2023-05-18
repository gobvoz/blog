import { StateSchema } from 'app/providers/store-provider';
import { selectLoading } from '../select-loading';

describe('selectLoading', () => {
  it('should return the loading', () => {
    const isLoading = true;
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading,
      },
    };
    expect(selectLoading(state as StateSchema)).toEqual(isLoading);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectLoading(state as StateSchema)).toEqual(false);
  });
});
