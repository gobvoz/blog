import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleParagraphBlock } from './article-paragraph-block';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { ArticleBlockParagraph, ArticleBlockType } from '../../../model/types/article';

export default {
  title: 'entities/article/article-paragraph-block',
  component: ArticleParagraphBlock,
} as ComponentMeta<typeof ArticleParagraphBlock>;

const Template: ComponentStory<typeof ArticleParagraphBlock> = args => (
  <ArticleParagraphBlock {...args} />
);

const block: ArticleBlockParagraph = {
  id: '11',
  type: ArticleBlockType.PARAGRAPH,
  content: [
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, harum ratione officiis ipsam optio rem mollitia? Sed soluta ea non.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, harum ratione officiis ipsam optio rem mollitia? Sed soluta ea non.',
  ],
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
