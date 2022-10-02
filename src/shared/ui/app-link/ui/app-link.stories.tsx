import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { RouterDecorator } from 'shared/config/storybook/router-decorator';
import { Theme } from 'shared/constants/theme';

import { AppLink } from './app-link';

export default {
  title: 'shared/app-link',
  component: AppLink,
  args: { children: 'Menu' },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = args => <AppLink {...args} />;

export const Light = Template.bind({});
Light.decorators = [RouterDecorator];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
