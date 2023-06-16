import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleImageBlock } from './article-image-block';

export default {
  title: 'entities/article/article-image-block',
  component: ArticleImageBlock,
} as ComponentMeta<typeof ArticleImageBlock>;

const Template: ComponentStory<typeof ArticleImageBlock> = args => <ArticleImageBlock {...args} />;

export const Default = Template.bind({});
