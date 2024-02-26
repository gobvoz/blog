import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationItem } from './notification-item';

export default {
  title: '---/notification-item',
  component: NotificationItem,
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = args => <NotificationItem {...args} />;

export const Default = Template.bind({});
