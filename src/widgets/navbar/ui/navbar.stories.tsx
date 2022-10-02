import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { RouterDecorator } from 'shared/config/storybook/router-decorator';
import { Theme } from 'shared/constants/theme';

import { Navbar } from './navbar';

export default {
  title: 'widget/navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = args => <Navbar {...args} />;

export const Light = Template.bind({});
Light.decorators = [RouterDecorator];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
