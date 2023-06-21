import { User, userActions } from 'entities/user';

import { TestAsyncThunk } from 'shared/libs/tests/test-async-thunk';

import { loginByUsername } from '../login-by-user-name';

jest.mock('axios');

describe('loginByUserName', () => {
  it('should to be a successful login', async () => {
    const userData = { username: 'username', password: 'password' };
    const returnedData: User = { username: 'username', id: '123', avatar: 'http://' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: returnedData }));
    const result = await thunk.dispatchAsync(userData);

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(returnedData));
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('fulfilled');
    expect(result.payload).toEqual(returnedData);
  });
  it('should to be rejected', async () => {
    const userData = { username: 'username', password: 'password' };
    const returnedData = { e: 'error' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.reject(returnedData));
    const result = await thunk.dispatchAsync(userData);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('rejected');
    expect(result.payload).toEqual(returnedData);
  });
});
