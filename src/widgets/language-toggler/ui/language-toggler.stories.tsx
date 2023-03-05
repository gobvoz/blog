import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { LanguageToggler } from './language-toggler';

export default {
  title: 'widget/language-toggler',
  component: LanguageToggler,
} as ComponentMeta<typeof LanguageToggler>;

const Template: ComponentStory<typeof LanguageToggler> = (args: object) => (
  <LanguageToggler {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
