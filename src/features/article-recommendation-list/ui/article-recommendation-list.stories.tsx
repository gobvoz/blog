import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleRecommendationList } from './article-recommendation-list';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';
import { Article } from 'entities/article/model/types/article';

const mockArticle: Article = {
  id: '1',
  profile: {},
  title: 'Top 10 Tricky Javascript Questions often asked by Interviewers',
  subtitle:
    'Top 10 tricky Javascript questions often asked by interviewers. Make sure you know all of them!',
  image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*KionUgns58P78XvfAFeeuw.jpeg',
  createdAt: '16.12.2022',
  link: 'https://andreassujono.medium.com/top-10-tricky-javascript-questions-often-asked-by-interviewers-45c7dd90495e',
  views: 79,
  topics: [
    'JavaScript',
    'JavaScript Interview',
    'Interview Questions',
    'Tricky Questions',
    'JavaScript Tips',
  ],
  body: [],
};

export default {
  title: 'features/article-recommendation-list',
  component: ArticleRecommendationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleRecommendationList>;

const Template: ComponentStory<typeof ArticleRecommendationList> = args => (
  <ArticleRecommendationList {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  mockData: [
    {
      url: 'http://localhost:6007/articles?_limit=4',
      method: 'GET',
      status: 200,
      response: [
        { ...mockArticle, id: '1' },
        { ...mockArticle, id: '2' },
        { ...mockArticle, id: '3' },
        { ...mockArticle, id: '4' },
      ],
    },
  ],
};
