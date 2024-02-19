import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AdminPanelPage } from './admin-panel-page';

export default {
  title: 'pages/admin-panel-page',
  component: AdminPanelPage,
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = args => <AdminPanelPage {...args} />;

export const Default = Template.bind({});
