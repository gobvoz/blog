import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { TextBlock, TextBlockMod } from './text-block';

export default {
  title: 'shared/text-block',
  component: TextBlock,
  args: {
    header: 'Header',
    paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Cum ipsum doloribus rem similique illum repellendus esse quae saepe enim 
    velit rerum quis, aliquam amet quia, fugiat nisi repellat ullam error?`,
  },
} as ComponentMeta<typeof TextBlock>;

const Template: ComponentStory<typeof TextBlock> = args => <TextBlock {...args} />;

export const Light = Template.bind({});

export const LightWithoutHeader = Template.bind({});
LightWithoutHeader.args = {
  header: undefined,
};

export const LightWithoutParagraph = Template.bind({});
LightWithoutParagraph.args = {
  paragraph: undefined,
};

export const LightError = Template.bind({});
LightError.args = {
  mod: TextBlockMod.ERROR_MESSAGE,
};

export const LightForm = Template.bind({});
LightForm.args = {
  mod: TextBlockMod.FORM,
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkWithoutHeader = Template.bind({});
DarkWithoutHeader.args = {
  header: undefined,
};
DarkWithoutHeader.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkWithoutParagraph = Template.bind({});
DarkWithoutParagraph.args = {
  paragraph: undefined,
};
DarkWithoutParagraph.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkError = Template.bind({});
DarkError.args = {
  mod: TextBlockMod.ERROR_MESSAGE,
};
DarkError.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkForm = Template.bind({});
DarkForm.args = {
  mod: TextBlockMod.FORM,
};
DarkForm.decorators = [ThemeDecorator(Theme.DARK)];
