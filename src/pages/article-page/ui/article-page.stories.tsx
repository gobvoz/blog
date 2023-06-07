import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlePage } from './article-page';

export default {
  title: 'page/article-page',
  component: ArticlePage,
} as ComponentMeta<typeof ArticlePage>;

const Template: ComponentStory<typeof ArticlePage> = args => <ArticlePage {...args} />;

export const Default = Template.bind({});
