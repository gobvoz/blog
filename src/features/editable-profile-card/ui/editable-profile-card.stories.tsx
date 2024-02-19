import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Country } from 'entities/country';
import { Currency } from 'entities/currency';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';

import { EditableProfileCard } from './editable-profile-card';

export default {
  title: 'features/editable-profile-card',
  component: EditableProfileCard,
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args: object) => (
  <EditableProfileCard {...args} />
);

export const Light = Template.bind({});
Light.decorators = [
  StoreDecorator({
    profile: {
      form: {
        first: 'John',
        last: 'Doe',
        age: '30',
        country: Country.USA,
        city: 'New York',
        currency: Currency.USD,
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        first: 'John',
        last: 'Doe',
        age: '30',
        country: Country.USA,
        city: 'New York',
        currency: Currency.USD,
      },
    },
  }),
];
