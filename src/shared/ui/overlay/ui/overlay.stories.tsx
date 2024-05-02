import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Overlay } from './overlay';

export default {
  title: 'shared/overlay',
  component: Overlay,
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = args => <Overlay {...args}>Content</Overlay>;

export const Default = Template.bind({});
