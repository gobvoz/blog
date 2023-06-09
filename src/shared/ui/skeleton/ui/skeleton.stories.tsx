import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skeleton } from './skeleton';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

export default {
  title: 'shared/skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = args => <Skeleton {...args} />;

export const Light = Template.bind({});

export const LightRounded = Template.bind({});
LightRounded.args = {
  height: 100,
  width: 100,
  radius: '50%',
};

export const LightSection = Template.bind({});
LightSection.args = {
  height: 100,
  width: '100%',
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkRounded = Template.bind({});
DarkRounded.args = {
  height: 100,
  width: 100,
  radius: '50%',
};
DarkRounded.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkSection = Template.bind({});
DarkSection.args = {
  height: 100,
  width: '100%',
};
DarkSection.decorators = [ThemeDecorator(Theme.DARK)];
