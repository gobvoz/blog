import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Drawer } from './drawer';

export default {
  title: 'shared/drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = args => <Drawer {...args} />;

export const Default = Template.bind({});
