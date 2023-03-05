import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { Button } from './button';

export default {
  title: 'shared/button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: object) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};

export const Transparent = Template.bind({});
Transparent.args = {
  transparent: true,
  children: 'Text',
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Text',
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  children: 'Text',
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

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
