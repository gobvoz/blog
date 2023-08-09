import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleHeaderBlock } from './article-header-block';
import { ArticleBlockHeader, ArticleBlockType } from '../../../model/types/article';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

export default {
  title: 'entities/article/article-header-block',
  component: ArticleHeaderBlock,
} as ComponentMeta<typeof ArticleHeaderBlock>;

const Template: ComponentStory<typeof ArticleHeaderBlock> = args => (
  <ArticleHeaderBlock {...args} />
);

const block: ArticleBlockHeader = {
  id: '8',
  type: ArticleBlockType.HEADER,
  content: ['2. Lorem ipsum dolor sit.'],
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
