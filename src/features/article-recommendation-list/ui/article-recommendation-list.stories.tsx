import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleRecommendationList } from './article-recommendation-list';

export default {
  title: 'features/ArticleRecommendationList',
  component: ArticleRecommendationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleRecommendationList>;

const Template: ComponentStory<typeof ArticleRecommendationList> = (args) => <ArticleRecommendationList {...args} />;

export const Default = Template.bind({});
Default.args = {

};
