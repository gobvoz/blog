import axios from 'axios';

import { loginByUsername } from '../login-by-user-name';
import { userActions } from 'entities/user';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('loginByUserName', () => {
  let dispatch: jest.Mock;
  let getState: jest.Mock;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  it('', async () => {
    const userData = { username: 'username', password: 'password' };
    const returnedData = { username: 'username', id: '123' };

    mockedAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: returnedData,
      }),
    );

    const action = loginByUsername(userData);
    const result = await action(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(returnedData));
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('fulfilled');
    expect(result.payload).toEqual(returnedData);
  });

  it('', async () => {
    const userData = { username: 'username', password: 'password' };
    const returnedData = 401;

    mockedAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status: returnedData,
      }),
    );

    const action = loginByUsername(userData);
    const result = await action(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('rejected');
    expect(result.payload).toEqual(undefined);
  });
});
