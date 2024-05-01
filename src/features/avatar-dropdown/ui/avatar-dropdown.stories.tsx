import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AvatarDropdown } from './avatar-dropdown';

export default {
  title: 'features/avatar-dropdown',
  component: AvatarDropdown,
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = args => <AvatarDropdown {...args} />;

export const Default = Template.bind({});
