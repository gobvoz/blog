import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { Avatar } from './avatar';

export default {
  title: 'shared/avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args: object) => (
  <Avatar
    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    {...args}
  />
);

export const LightSmall = Template.bind({});
LightSmall.args = {
  small: true,
};

export const LightMedium = Template.bind({});
LightMedium.args = {
  medium: true,
};

export const LightLarge = Template.bind({});
LightLarge.args = {
  large: true,
};

export const LightWithoutSrc: ComponentStory<typeof Avatar> = (args: object) => (
  <Avatar medium {...args} />
);

export const DarkSmall = Template.bind({});
DarkSmall.args = {
  small: true,
};
DarkSmall.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkMedium = Template.bind({});
DarkMedium.args = {
  medium: true,
};
DarkMedium.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkLarge = Template.bind({});
DarkLarge.args = {
  large: true,
};
DarkLarge.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkWithoutSrc: ComponentStory<typeof Avatar> = (args: object) => (
  <Avatar medium {...args} />
);
DarkWithoutSrc.decorators = [ThemeDecorator(Theme.DARK)];
