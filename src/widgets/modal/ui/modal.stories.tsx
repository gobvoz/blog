import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './modal';

export default {
  title: 'widget/modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Default = Template.bind({});
