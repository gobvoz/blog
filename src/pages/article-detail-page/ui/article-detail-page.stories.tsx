import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleDetailPage } from './article-detail-page';

export default {
  title: 'page/article-detail-page',
  component: ArticleDetailPage,
} as ComponentMeta<typeof ArticleDetailPage>;

const Template: ComponentStory<typeof ArticleDetailPage> = args => <ArticleDetailPage {...args} />;

export const Default = Template.bind({});
