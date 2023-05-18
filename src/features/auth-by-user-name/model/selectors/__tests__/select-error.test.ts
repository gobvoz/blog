import { StateSchema } from 'app/providers/store-provider';
import { selectError } from '../select-error';

describe('selectError', () => {
  it('should return the error', () => {
    const error = 'error';
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error,
      },
    };
    expect(selectError(state as StateSchema)).toEqual(error);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectError(state as StateSchema)).toEqual('');
  });
});
