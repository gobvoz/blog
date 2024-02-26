import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DropdownMenu } from './dropdown-menu';
import { Avatar } from 'shared/ui/avatar';

export default {
  title: 'shared/popup/dropdown-menu',
  component: DropdownMenu,
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = args => <DropdownMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: {
    trigger: <Avatar small />,
    itemList: [
      {
        content: 'Item 1',
        onClick: () => console.log('Item 1'),
      },
      {
        content: 'Item 2',
        onClick: () => console.log('Item 2'),
      },
      {
        content: 'Item 3',
        onClick: () => console.log('Item 3'),
      },
    ],
  },
};
