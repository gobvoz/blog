import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from './flex';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

export default {
  title: 'shared/flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = args => (
  <Flex
    style={{
      width: '30%',
      height: '300px',
      margin: 'auto',
      border: '1px solid orange',
    }}
    {...args}>
    <div style={{ border: '1px solid gray' }}>element 1</div>
    <div style={{ border: '1px solid gray' }}>element 2</div>
    <div style={{ border: '1px solid gray' }}>element 3</div>
    <div style={{ border: '1px solid gray' }}>element 4</div>
    <div style={{ border: '1px solid gray' }}>element 5</div>
  </Flex>
);

export const Light = Template.bind({});

export const LightColumn = Template.bind({});
LightColumn.args = { direction: 'column' };

export const LightJustifyBetween = Template.bind({});
LightJustifyBetween.args = { justify: 'between' };

export const LightJustifyAround = Template.bind({});
LightJustifyAround.args = { justify: 'around' };

export const LightJustifyCenter = Template.bind({});
LightJustifyCenter.args = { justify: 'center' };

export const LightJustifyEnd = Template.bind({});
LightJustifyEnd.args = { justify: 'end' };

export const LightAlignStart = Template.bind({});
LightAlignStart.args = { align: 'start' };

export const LightAlignEnd = Template.bind({});
LightAlignEnd.args = { align: 'end' };

export const LightAlignCenter = Template.bind({});
LightAlignCenter.args = { align: 'center' };

export const LightAlignBaseline = Template.bind({});
LightAlignBaseline.args = { align: 'baseline' };

export const LightAlignStretch = Template.bind({});
LightAlignStretch.args = { align: 'stretch' };

export const LightWrap = Template.bind({});
LightWrap.args = { wrap: 'wrap' };

export const LightWrapReverse = Template.bind({});
LightWrapReverse.args = { wrap: 'wrap-reverse' };

export const LightNowrap = Template.bind({});
LightNowrap.args = { wrap: 'nowrap' };

export const LightGapXs = Template.bind({});
LightGapXs.args = { gap: 'xs' };

export const LightGapS = Template.bind({});
LightGapS.args = { gap: 's' };

export const LightGapM = Template.bind({});
LightGapM.args = { gap: 'm' };

export const LightGapL = Template.bind({});
LightGapL.args = { gap: 'l' };

export const LightGapXl = Template.bind({});
LightGapXl.args = { gap: 'xl' };

export const LightGapXxl = Template.bind({});
LightGapXxl.args = { gap: 'xxl' };

export const LightAll = Template.bind({});
LightAll.args = {
  justify: 'between',
  align: 'center',
  direction: 'row',
  wrap: 'wrap',
  gap: 's',
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkColumn = Template.bind({});
DarkColumn.decorators = [ThemeDecorator(Theme.DARK)];
DarkColumn.args = { direction: 'column' };

export const DarkJustifyBetween = Template.bind({});
DarkJustifyBetween.decorators = [ThemeDecorator(Theme.DARK)];
DarkJustifyBetween.args = { justify: 'between' };

export const DarkJustifyAround = Template.bind({});
DarkJustifyAround.decorators = [ThemeDecorator(Theme.DARK)];
DarkJustifyAround.args = { justify: 'around' };

export const DarkJustifyCenter = Template.bind({});
DarkJustifyCenter.decorators = [ThemeDecorator(Theme.DARK)];
DarkJustifyCenter.args = { justify: 'center' };

export const DarkJustifyEnd = Template.bind({});
DarkJustifyEnd.decorators = [ThemeDecorator(Theme.DARK)];
DarkJustifyEnd.args = { justify: 'end' };

export const DarkAlignStart = Template.bind({});
DarkAlignStart.decorators = [ThemeDecorator(Theme.DARK)];
DarkAlignStart.args = { align: 'start' };

export const DarkAlignEnd = Template.bind({});
DarkAlignEnd.decorators = [ThemeDecorator(Theme.DARK)];
DarkAlignEnd.args = { align: 'end' };

export const DarkAlignCenter = Template.bind({});
DarkAlignCenter.decorators = [ThemeDecorator(Theme.DARK)];
DarkAlignCenter.args = { align: 'center' };

export const DarkAlignBaseline = Template.bind({});
DarkAlignBaseline.decorators = [ThemeDecorator(Theme.DARK)];
DarkAlignBaseline.args = { align: 'baseline' };

export const DarkAlignStretch = Template.bind({});
DarkAlignStretch.decorators = [ThemeDecorator(Theme.DARK)];
DarkAlignStretch.args = { align: 'stretch' };

export const DarkWrap = Template.bind({});
DarkWrap.decorators = [ThemeDecorator(Theme.DARK)];
DarkWrap.args = { wrap: 'wrap' };

export const DarkWrapReverse = Template.bind({});
DarkWrapReverse.decorators = [ThemeDecorator(Theme.DARK)];
DarkWrapReverse.args = { wrap: 'wrap-reverse' };

export const DarkNowrap = Template.bind({});
DarkNowrap.decorators = [ThemeDecorator(Theme.DARK)];
DarkNowrap.args = { wrap: 'nowrap' };

export const DarkGapXs = Template.bind({});
DarkGapXs.decorators = [ThemeDecorator(Theme.DARK)];
DarkGapXs.args = { gap: 'xs' };

export const DarkGapS = Template.bind({});
DarkGapS.decorators = [ThemeDecorator(Theme.DARK)];
DarkGapS.args = { gap: 's' };

export const DarkGapM = Template.bind({});
DarkGapM.decorators = [ThemeDecorator(Theme.DARK)];
DarkGapM.args = { gap: 'm' };

export const DarkGapL = Template.bind({});
DarkGapL.decorators = [ThemeDecorator(Theme.DARK)];
DarkGapL.args = { gap: 'l' };

export const DarkGapXl = Template.bind({});
DarkGapXl.decorators = [ThemeDecorator(Theme.DARK)];
DarkGapXl.args = { gap: 'xl' };

export const DarkGapXxl = Template.bind({});
DarkGapXxl.decorators = [ThemeDecorator(Theme.DARK)];
DarkGapXxl.args = { gap: 'xxl' };

export const DarkAll = Template.bind({});
DarkAll.decorators = [ThemeDecorator(Theme.DARK)];
DarkAll.args = {
  justify: 'between',
  align: 'center',
  direction: 'row',
  wrap: 'wrap',
  gap: 's',
};
