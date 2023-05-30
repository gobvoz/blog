import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Profile } from 'entities/profile';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { ProfileCard } from './profile-card';

export default {
  title: 'entities/profile-card',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args: object) => <ProfileCard {...args} />;

export const Light = Template.bind({});
Light.args = {
  data: {
    username: 'johndoe',
    first: 'John',
    last: 'Doe',
    age: '30',
    country: Country.USA,
    city: 'New York',
    currency: Currency.USD,
  } as Profile,
};

export const LightWithEdit = Template.bind({});
LightWithEdit.args = {
  data: {
    username: 'johndoe',
    first: 'John',
    last: 'Doe',
    age: '30',
    country: Country.USA,
    city: 'New York',
    currency: Currency.USD,
  } as Profile,
  readonly: false,
};

export const LightWithError = Template.bind({});
LightWithError.args = {
  error: 'Error message',
};

export const LightWithLoading = Template.bind({});
LightWithLoading.args = {
  isLoading: true,
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = {
  data: {
    username: 'johndoe',
    first: 'John',
    last: 'Doe',
    age: '30',
    country: Country.USA,
    city: 'New York',
    currency: Currency.USD,
  } as Profile,
};

export const DarkWithEdit = Template.bind({});
DarkWithEdit.decorators = [ThemeDecorator(Theme.DARK)];
DarkWithEdit.args = {
  data: {
    username: 'johndoe',
    first: 'John',
    last: 'Doe',
    age: '30',
    country: Country.USA,
    city: 'New York',
    currency: Currency.USD,
  } as Profile,
  readonly: false,
};

export const DarkWithError = Template.bind({});
DarkWithError.decorators = [ThemeDecorator(Theme.DARK)];
DarkWithError.args = {
  error: 'Error message',
};

export const DarkWithLoading = Template.bind({});
DarkWithLoading.decorators = [ThemeDecorator(Theme.DARK)];
DarkWithLoading.args = {
  isLoading: true,
};
