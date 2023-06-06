import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from 'app/providers/store-provider';
import { profileReducer } from 'entities/profile';

import { loginReducer } from 'features/auth-by-user-name/model/slice/login-slice';
import { ReducerList } from 'shared/libs/components/dynamic-module-loader';

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) => (StoryComponent: Story) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
      </StoreProvider>
    );
  };
