import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleRecommendationList } from './article-recommendation-list';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';

export default {
  title: 'features/article-recommendation-list',
  component: ArticleRecommendationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleRecommendationList>;

const Template: ComponentStory<typeof ArticleRecommendationList> = args => (
  <ArticleRecommendationList {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({})];
