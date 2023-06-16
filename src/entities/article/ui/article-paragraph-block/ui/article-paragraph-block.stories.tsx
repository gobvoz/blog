import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleParagraphBlock } from './article-paragraph-block';

export default {
  title: 'entities/article/article-paragraph-block',
  component: ArticleParagraphBlock,
} as ComponentMeta<typeof ArticleParagraphBlock>;

const Template: ComponentStory<typeof ArticleParagraphBlock> = args => (
  <ArticleParagraphBlock {...args} />
);

export const Default = Template.bind({});
