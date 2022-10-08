import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { Modal } from './modal';

export default {
  title: 'widget/modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <h4>Modal window</h4>
      <p>this is modal window</p>
    </>
  ),
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  children: (
    <>
      <h4>Modal window</h4>
      <p>this is modal window</p>
    </>
  ),
};

DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
