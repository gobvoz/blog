import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleSeparatorBlock } from './article-separator-block';

export default {
  title: 'entities/article/article-separator-block',
  component: ArticleSeparatorBlock,
} as ComponentMeta<typeof ArticleSeparatorBlock>;

const Template: ComponentStory<typeof ArticleSeparatorBlock> = args => (
  <ArticleSeparatorBlock {...args} />
);

export const Default = Template.bind({});
