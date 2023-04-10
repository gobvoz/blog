import axios from 'axios';

import { userActions } from 'entities/user';

import { TestAsyncThunk } from 'shared/libs/tests/test-async-thunk';

import { loginByUsername } from '../login-by-user-name';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('loginByUserName', () => {
  it('should to be a successful login', async () => {
    const userData = { username: 'username', password: 'password' };
    const returnedData = { username: 'username', id: '123' };

    mockedAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: returnedData,
      }),
    );

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.dispatchAsync(userData);

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(returnedData));
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('fulfilled');
    expect(result.payload).toEqual(returnedData);
  });
  it('should to be rejected', async () => {
    const userData = { username: 'username', password: 'password' };
    const returnedData = 401;

    mockedAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status: returnedData,
      }),
    );

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.dispatchAsync(userData);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('rejected');
    expect(result.payload).toEqual(undefined);
  });
});
