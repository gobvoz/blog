import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CollapseProvider } from 'app/providers/collapse-provider';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { Sidebar } from './sidebar';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';

export default {
  title: 'widget/sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args: object) => (
  <CollapseProvider>
    <Sidebar {...args} />
  </CollapseProvider>
);

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({})];

export const LightWithAuth = Template.bind({});
LightWithAuth.decorators = [StoreDecorator({ user: { authData: { id: '1', username: 'admin' } } })];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const DarkWithAuth = Template.bind({});
DarkWithAuth.decorators = [StoreDecorator({ user: { authData: { id: '1', username: 'admin' } } })];
