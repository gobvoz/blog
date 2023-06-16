import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { TextBlock } from './text-block';

export default {
  title: 'shared/text-block',
  component: TextBlock,
  args: {
    header: 'Paragraph header',
    paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Cum ipsum doloribus rem similique illum repellendus esse quae saepe enim 
    velit rerum quis, aliquam amet quia, fugiat nisi repellat ullam error?`,
  },
} as ComponentMeta<typeof TextBlock>;

const Template: ComponentStory<typeof TextBlock> = args => <TextBlock {...args} />;

export const Light = Template.bind({});

export const LightSmall = Template.bind({});
LightSmall.args = {
  small: true,
};

export const LightLarge = Template.bind({});
LightLarge.args = {
  large: true,
};

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
  errorMessage: true,
};

export const LightForm = Template.bind({});
LightForm.args = {
  form: true,
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkSmall = Template.bind({});
DarkSmall.args = {
  small: true,
};
DarkSmall.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkLarge = Template.bind({});
DarkLarge.args = {
  large: true,
};
DarkLarge.decorators = [ThemeDecorator(Theme.DARK)];

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
  errorMessage: true,
};
DarkError.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkForm = Template.bind({});
DarkForm.args = {
  form: true,
};
DarkForm.decorators = [ThemeDecorator(Theme.DARK)];
