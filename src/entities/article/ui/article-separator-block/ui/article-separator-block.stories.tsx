import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleSeparatorBlock } from './article-separator-block';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { ArticleBlockSeparator, ArticleBlockType } from '../../../model/types/article';

export default {
  title: 'entities/article/blocks/article-separator-block',
  component: ArticleSeparatorBlock,
} as ComponentMeta<typeof ArticleSeparatorBlock>;

const Template: ComponentStory<typeof ArticleSeparatorBlock> = args => (
  <ArticleSeparatorBlock {...args} />
);

const block: ArticleBlockSeparator = {
  id: '16',
  type: ArticleBlockType.SEPARATOR,
  content: [],
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
