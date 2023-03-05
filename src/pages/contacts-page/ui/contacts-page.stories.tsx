import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { ContactsPage } from './contacts-page';

export default {
  title: 'page/contacts-page',
  component: ContactsPage,
} as ComponentMeta<typeof ContactsPage>;

const Template: ComponentStory<typeof ContactsPage> = (args: object) => <ContactsPage {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
