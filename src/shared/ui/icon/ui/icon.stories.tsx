import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { Icon } from './icon';

export default {
  title: 'shared/icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Svg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      fill="currentColor"
      d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1 15v-4H8V9h4V5l5 6-5 6z"
    />
  </svg>
);

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} Svg={Svg} />;

export const Light = Template.bind({});

export const LightMedium = Template.bind({});
LightMedium.args = { medium: true };

export const LightSmall = Template.bind({});
LightSmall.args = { small: true };

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkMedium = Template.bind({});
DarkMedium.args = { medium: true };
DarkMedium.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkSmall = Template.bind({});
DarkSmall.args = { small: true };
DarkSmall.decorators = [ThemeDecorator(Theme.DARK)];
