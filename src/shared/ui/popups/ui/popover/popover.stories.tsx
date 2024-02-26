import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Popover } from './popover';

export default {
  title: 'shared/popup/popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = args => <Popover {...args} />;

export const Default = Template.bind({});
