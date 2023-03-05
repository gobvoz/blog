import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';
import { AppLink } from 'shared/ui/app-link';

import { Menu } from './menu';

export default {
  title: 'shared/menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = args => <Menu {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: [
    <AppLink to="#">Main</AppLink>,
    <AppLink to="#">About</AppLink>,
    <AppLink to="#">Contacts</AppLink>,
    <AppLink to="#">Logout</AppLink>,
  ],
};

export const Dark = Template.bind({});
Dark.args = {
  children: [
    <AppLink to="#">Main</AppLink>,
    <AppLink to="#">About</AppLink>,
    <AppLink to="#">Contacts</AppLink>,
    <AppLink to="#">Logout</AppLink>,
  ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightHorizontal = Template.bind({});
LightHorizontal.args = {
  children: [
    <AppLink to="#">Main</AppLink>,
    <AppLink to="#">About</AppLink>,
    <AppLink to="#">Contacts</AppLink>,
    <AppLink to="#">Logout</AppLink>,
  ],
};

export const DarkHorizontal = Template.bind({});
DarkHorizontal.args = {
  children: [
    <AppLink to="#">Main</AppLink>,
    <AppLink to="#">About</AppLink>,
    <AppLink to="#">Contacts</AppLink>,
    <AppLink to="#">Logout</AppLink>,
  ],
};
DarkHorizontal.decorators = [ThemeDecorator(Theme.DARK)];

export const LightVertical = Template.bind({});
LightVertical.args = {
  vertical: true,
  children: [
    <AppLink to="#">Main</AppLink>,
    <AppLink to="#">About</AppLink>,
    <AppLink to="#">Contacts</AppLink>,
    <AppLink to="#">Logout</AppLink>,
  ],
};

export const DarkVertical = Template.bind({});
DarkVertical.args = {
  vertical: true,
  children: [
    <AppLink to="#">Main</AppLink>,
    <AppLink to="#">About</AppLink>,
    <AppLink to="#">Contacts</AppLink>,
    <AppLink to="#">Logout</AppLink>,
  ],
};
DarkVertical.decorators = [ThemeDecorator(Theme.DARK)];
