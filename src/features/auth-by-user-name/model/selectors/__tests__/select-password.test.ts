import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/store-provider';
import { selectPassword } from '../select-password';

describe('selectPassword', () => {
  it('should return the password', () => {
    const password = 'password';
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password,
      },
    };
    expect(selectPassword(state as StateSchema)).toEqual(password);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectPassword(state as StateSchema)).toEqual('');
  });
});
