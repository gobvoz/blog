import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { CurrencySelect } from './currency-select';

export default {
  title: 'entities/currency-select',
  component: CurrencySelect,
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args: object) => (
  <CurrencySelect {...args} />
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
