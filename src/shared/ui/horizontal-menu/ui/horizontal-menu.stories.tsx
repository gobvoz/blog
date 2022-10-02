import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { RouterDecorator } from 'shared/config/storybook/router-decorator';
import { Theme } from 'shared/constants/theme';

import { AppLink } from 'shared/ui/app-link';
import { HorizontalMenu } from './horizontal-menu';

export default {
  title: 'shared/horizontal-menu',
  component: HorizontalMenu,
} as ComponentMeta<typeof HorizontalMenu>;

const Template: ComponentStory<typeof HorizontalMenu> = args => <HorizontalMenu {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: [
    <AppLink to="#">Main</AppLink>,
    <AppLink to="#">About</AppLink>,
    <AppLink to="#">Contacts</AppLink>,
    <AppLink to="#">Logout</AppLink>,
  ],
};
Light.decorators = [RouterDecorator];

export const Dark = Template.bind({});
Dark.args = {
  children: [
    <AppLink to="#">Main</AppLink>,
    <AppLink to="#">About</AppLink>,
    <AppLink to="#">Contacts</AppLink>,
    <AppLink to="#">Logout</AppLink>,
  ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
