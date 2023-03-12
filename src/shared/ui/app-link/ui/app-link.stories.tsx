import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { AppLink } from './app-link';

export default {
  title: 'shared/app-link',
  component: AppLink,
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args: object) => <AppLink to="#" {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: 'Link',
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Link',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
