import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleEditPage } from './article-edit-page';

export default {
  title: '---/article-edit-page',
  component: ArticleEditPage,
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = args => <ArticleEditPage {...args} />;

export const Default = Template.bind({});
