import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { Select } from './select';

export default {
  title: 'shared/select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: object) => <Select {...args} />;

export const Light = Template.bind({});
Light.args = {
  readOnly: false,
  placeholder: 'Placeholder',
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
  ],
};

export const Dark = Template.bind({});
Dark.args = {
  readOnly: false,
  placeholder: 'Placeholder',
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
  ],
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
