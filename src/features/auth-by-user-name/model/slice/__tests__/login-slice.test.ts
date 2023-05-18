import { LoginSchema } from '../../types/login-schema';
import { loginActions, loginReducer } from '../login-slice';
import { loginByUsername } from '../../services/login-by-user-name';

describe('loginSlice test', () => {
  test('should set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'username' };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('new-user-name'))).toEqual({
      username: 'new-user-name',
    });
  });
  test('should set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('c-3Po&R2-d2'))).toEqual({
      password: 'c-3Po&R2-d2',
    });
  });
  test('should set isLoading to true', () => {
    expect(loginReducer(undefined, loginByUsername.pending)).toEqual({
      isLoading: true,
      username: '',
      password: '',
      error: undefined,
    });
  });
  test('should set isLoading to false', () => {
    const state: DeepPartial<LoginSchema> = { isLoading: true };

    expect(loginReducer(state as LoginSchema, loginByUsername.fulfilled)).toEqual({
      isLoading: false,
    });
  });
  test('should set error', () => {
    const state: DeepPartial<LoginSchema> = { error: '' };

    expect(loginReducer(state as LoginSchema, loginByUsername.rejected)).toEqual({
      isLoading: false,
      error: undefined,
    });
  });
});
