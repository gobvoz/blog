import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { Input } from './input';

export default {
  title: 'shared/input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'Text',
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  value: 'Text',
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
