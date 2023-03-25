import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';
import { Theme } from 'shared/constants/theme';

import { LoginForm } from './login-form';

export default {
  title: 'features/login-form',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = args => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.decorators = [
  StoreDecorator({
    loginForm: { username: 'user name', password: '123' },
  }),
];

export const LightWithError = Template.bind({});
LightWithError.decorators = [
  StoreDecorator({
    loginForm: { username: 'user name', password: '123', error: 'error' },
  }),
];

export const LightWithLoading = Template.bind({});
LightWithLoading.decorators = [
  StoreDecorator({
    loginForm: { isLoading: true },
  }),
];

export const Dark = Template.bind({});
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: { username: 'user name', password: '123' },
  }),
];

export const DarkWithError = Template.bind({});
DarkWithError.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: { username: 'user name', password: '123', error: 'error' },
  }),
];

export const DarkWithLoading = Template.bind({});
DarkWithLoading.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: { isLoading: true },
  }),
];
