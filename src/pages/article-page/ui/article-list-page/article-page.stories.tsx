import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlePage } from './article-page';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';
import { ListType } from 'features/list-type-switcher';
import { ArticleType } from 'entities/article';
import { ArticleBlockType } from 'entities/article/';

export default {
  title: 'page/article-page',
  component: ArticlePage,
} as ComponentMeta<typeof ArticlePage>;

const Template: ComponentStory<typeof ArticlePage> = args => <ArticlePage {...args} />;

const article: ArticleType = {
  id: '1',
  profile: {
    id: '1',
    first: 'John',
    last: 'Doe',
    avatar: 'https://i.pravatar.cc/300?img=13',
  },
  title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  subtitle: '',
  image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*KionUgns58P78XvfAFeeuw.jpeg',
  createdAt: '01.01.1970',
  link: 'https://enlear.academy/7-new-javascript-features-in-ecmascript-2022-64a330f6eae2',
  views: 0,
  topics: ['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem'],
  body: [
    {
      id: '1',
      type: ArticleBlockType.PARAGRAPH,
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut nulla vero ullam recusandae incidunt? Blanditiis neque odit omnis pariatur doloribus eveniet hic corrupti odio natus nobis, nihil delectus temporibus!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut nulla vero ullam recusandae incidunt? Blanditiis neque odit omnis pariatur doloribus eveniet hic corrupti odio natus nobis, nihil delectus temporibus!',
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.PARAGRAPH,
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut nulla vero ullam recusandae incidunt? Blanditiis neque odit omnis pariatur doloribus eveniet hic corrupti odio natus nobis, nihil delectus temporibus!',
      ],
    },
  ],
};

const mockedStore = {
  articleList: {
    listType: ListType.GRID,

    ids: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    entities: {
      '1': article,
      '2': article,
      '3': article,
      '4': article,
      '5': article,
      '6': article,
      '7': article,
      '8': article,
      '9': article,
      '10': article,
    },
  },
};

export const Light = Template.bind({});
Light.decorators = [StoreDecorator(mockedStore)];

export const LightSkeleton = Template.bind({});
LightSkeleton.decorators = [
  StoreDecorator({
    articleList: {
      ids: [],
      entities: {},
      isLoading: true,
    },
  }),
];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(mockedStore)];

export const DarkSkeleton = Template.bind({});
DarkSkeleton.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleList: {
      ids: [],
      entities: {},
      isLoading: true,
    },
  }),
];
