import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationList } from './notification-list';

export default {
  title: 'entity/notification-list',
  component: NotificationList,
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = args => <NotificationList {...args} />;

export const Default = Template.bind({});
