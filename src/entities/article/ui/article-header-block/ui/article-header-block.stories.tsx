import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleHeaderBlock } from './article-header-block';

export default {
  title: 'entities/article/article-header-block',
  component: ArticleHeaderBlock,
} as ComponentMeta<typeof ArticleHeaderBlock>;

const Template: ComponentStory<typeof ArticleHeaderBlock> = args => (
  <ArticleHeaderBlock {...args} />
);

export const Default = Template.bind({});
