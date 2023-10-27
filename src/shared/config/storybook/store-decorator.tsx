import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from 'app/providers/store-provider';
import { articleReducer } from 'entities/article/model/slice/article-slice';
import { profileReducer } from 'entities/profile';

import { loginReducer } from 'features/auth-by-user-name/model/slice/login-slice';
import { articleListReducer } from 'pages/article-page/model/slice/article-list';
import { ReducerList } from 'shared/libs/components/dynamic-module-loader';

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  article: articleReducer,
  articleList: articleListReducer,
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
