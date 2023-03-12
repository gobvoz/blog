import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { Button } from './button';

export default {
  title: 'shared/button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: object) => <Button {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: 'Text',
};

export const TransparentLight = Template.bind({});
TransparentLight.args = {
  transparent: true,
  children: 'Text',
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  primary: true,
  children: 'Text',
};

export const AppLinkLight = Template.bind({});
AppLinkLight.args = {
  appLink: true,
  children: 'Text',
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const TransparentDark = Template.bind({});
TransparentDark.args = {
  transparent: true,
  children: 'Text',
};
TransparentDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  primary: true,
  children: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const AppLinkDark = Template.bind({});
AppLinkDark.args = {
  appLink: true,
  children: 'Text',
};
AppLinkDark.decorators = [ThemeDecorator(Theme.DARK)];
