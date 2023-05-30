import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { CountrySelect } from './country-select';

export default {
  title: 'entities/country-select',
  component: CountrySelect,
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args: object) => (
  <CountrySelect {...args} />
);

export const Light = Template.bind({});
Light.args = {
  readOnly: false,
};

export const Dark = Template.bind({});
Dark.args = {
  readOnly: false,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
