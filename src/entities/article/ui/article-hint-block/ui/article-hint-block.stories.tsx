import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleHintBlock } from './article-hint-block';

export default {
  title: 'entities/article/article-hint-block',
  component: ArticleHintBlock,
} as ComponentMeta<typeof ArticleHintBlock>;

const Template: ComponentStory<typeof ArticleHintBlock> = args => <ArticleHintBlock {...args} />;

export const Default = Template.bind({});
