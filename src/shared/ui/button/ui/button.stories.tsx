import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { Button, ButtonMod } from './button';

export default {
  title: 'shared/button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: 'Text',
};

export const Transparent = Template.bind({});
Transparent.args = {
  mod: ButtonMod.TRANSPARENT,
  children: 'Text',
};

export const Link = Template.bind({});
Link.args = {
  mod: ButtonMod.APP_LINK,
  children: 'Text',
};

export const Primary = Template.bind({});
Primary.args = {
  mod: ButtonMod.PRIMARY,
  children: 'Text',
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Text',
  loading: true,
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  children: 'Text',
  mod: ButtonMod.PRIMARY,
  loading: true,
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const TransparentDark = Template.bind({});
TransparentDark.args = {
  mod: ButtonMod.TRANSPARENT,
  children: 'Text',
};
TransparentDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LinkDark = Template.bind({});
LinkDark.args = {
  mod: ButtonMod.APP_LINK,
  children: 'Text',
};
LinkDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  mod: ButtonMod.PRIMARY,
  children: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryLoadingDark = Template.bind({});
PrimaryLoadingDark.args = {
  children: 'Text',
  mod: ButtonMod.PRIMARY,
  loading: true,
};
PrimaryLoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingDark = Template.bind({});
LoadingDark.args = {
  children: 'Text',
  loading: true,
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];
