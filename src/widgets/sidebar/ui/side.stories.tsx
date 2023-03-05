import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CollapseProvider } from 'app/providers/collapse-provider';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { Sidebar } from './sidebar';
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

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
