import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleHintBlock } from './article-hint-block';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { ArticleBlockHint, ArticleBlockType } from '../../../model/types/article';

export default {
  title: 'entities/article/article-hint-block',
  component: ArticleHintBlock,
} as ComponentMeta<typeof ArticleHintBlock>;

const Template: ComponentStory<typeof ArticleHintBlock> = args => <ArticleHintBlock {...args} />;

const block: ArticleBlockHint = {
  id: '8',
  type: ArticleBlockType.HINT,
  content: ['1. Lorem ipsum dolor sit.', '2. Lorem ipsum dolor sit.'],
};

export const Light = Template.bind({});
Light.args = {
  block,
};

export const Dark = Template.bind({});
Dark.args = {
  block,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
