import { StateSchema } from 'app/providers/store-provider';
import { selectUsername } from '../select-username';

describe('selectUsername', () => {
  it('should return the username', () => {
    const username = 'username';
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username,
      },
    };
    expect(selectUsername(state as StateSchema)).toEqual(username);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectUsername(state as StateSchema)).toEqual('');
  });
});
