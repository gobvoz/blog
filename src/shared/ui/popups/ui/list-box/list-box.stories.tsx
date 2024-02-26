import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './list-box';

export default {
  title: 'shared/popup/list-box',
  component: ListBox,
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = args => <ListBox {...args} />;

export const Default = Template.bind({});
