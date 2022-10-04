import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { RouterDecorator } from 'shared/config/storybook/router-decorator';
import { Theme } from 'shared/constants/theme';

import { AppLink } from 'shared/ui/app-link';
import { Menu } from './menu';

export default {
  title: 'shared/horizontal-menu',
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
Light.decorators = [RouterDecorator];

export const Dark = Template.bind({});
Dark.args = {
  children: [
    <AppLink to="#">Main</AppLink>,
    <AppLink to="#">About</AppLink>,
    <AppLink to="#">Contacts</AppLink>,
    <AppLink to="#">Logout</AppLink>,
  ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];

export const LightHorizontal = Template.bind({});
Light.args = {
  horizontal: true,
  children: [
    <AppLink to="#">Main</AppLink>,
    <AppLink to="#">About</AppLink>,
    <AppLink to="#">Contacts</AppLink>,
    <AppLink to="#">Logout</AppLink>,
  ],
};
LightHorizontal.decorators = [RouterDecorator];

export const DarkHorizontal = Template.bind({});
DarkHorizontal.args = {
  horizontal: true,
  children: [
    <AppLink to="#">Main</AppLink>,
    <AppLink to="#">About</AppLink>,
    <AppLink to="#">Contacts</AppLink>,
    <AppLink to="#">Logout</AppLink>,
  ],
};
DarkHorizontal.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];

export const LightVertical = Template.bind({});
Light.args = {
  vertical: true,
  children: [
    <AppLink to="#">Main</AppLink>,
    <AppLink to="#">About</AppLink>,
    <AppLink to="#">Contacts</AppLink>,
    <AppLink to="#">Logout</AppLink>,
  ],
};
LightVertical.decorators = [RouterDecorator];

export const DarkVertical = Template.bind({});
DarkHorizontal.args = {
  vertical: true,
  children: [
    <AppLink to="#">Main</AppLink>,
    <AppLink to="#">About</AppLink>,
    <AppLink to="#">Contacts</AppLink>,
    <AppLink to="#">Logout</AppLink>,
  ],
};
DarkVertical.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
