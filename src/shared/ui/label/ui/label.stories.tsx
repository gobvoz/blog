import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { Label } from './label';

export default {
  title: 'shared/label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args: object) => <Label {...args} />;

export const Light = Template.bind({});
Light.args = {
  value: 'Text label',
};

export const Dark = Template.bind({});
Dark.args = {
  value: 'Text label',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
