import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';
import { Country, Currency } from 'shared/constants/common';

import { ProfilePage } from './profile-page';

export default {
  title: 'page/profile-page',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args: object) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.decorators = [
  StoreDecorator({
    profile: {
      data: {
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
      data: {
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
