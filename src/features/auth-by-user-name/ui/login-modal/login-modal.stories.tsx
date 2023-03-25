import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';
import { Theme } from 'shared/constants/theme';

import { LoginModal } from './login-modal';

export default {
  title: 'features/login-modal',
  component: LoginModal,
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = args => <LoginModal {...args} />;

export const Light = Template.bind({});
Light.decorators = [
  StoreDecorator({
    loginForm: { username: 'user name', password: '123' },
  }),
];

export const Dark = Template.bind({});
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: { username: 'user name', password: '123' },
  }),
];
