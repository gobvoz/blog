import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { ThemeToggler } from './theme-toggler';

export default {
  title: 'widget/theme-toggler',
  component: ThemeToggler,
} as ComponentMeta<typeof ThemeToggler>;

const Template: ComponentStory<typeof ThemeToggler> = (args: object) => <ThemeToggler {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
