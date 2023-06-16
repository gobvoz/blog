import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleCodeBlock } from './article-code-block';

export default {
  title: 'entities/article/article-code-block',
  component: ArticleCodeBlock,
} as ComponentMeta<typeof ArticleCodeBlock>;

const Template: ComponentStory<typeof ArticleCodeBlock> = args => <ArticleCodeBlock {...args} />;

export const Default = Template.bind({});
