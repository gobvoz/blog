import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationDropdown } from './notification-dropdown';

export default {
  title: 'entity/notification/notification-dropdown',
  component: NotificationDropdown,
} as ComponentMeta<typeof NotificationDropdown>;

const Template: ComponentStory<typeof NotificationDropdown> = args => (
  <NotificationDropdown {...args} />
);

export const Default = Template.bind({});
