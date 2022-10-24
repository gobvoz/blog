import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { Navbar } from './navbar';

export default {
  title: 'widget/navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = args => <Navbar {...args} />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({})];

export const LightWithAuth = Template.bind({});
LightWithAuth.decorators = [
  StoreDecorator({
    user: { authData: { id: '7', username: 'administrator' } },
  }),
];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const DarkWithAuth = Template.bind({});
DarkWithAuth.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: { authData: { id: '7', username: 'administrator' } },
  }),
];
