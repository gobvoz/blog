import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { ArticleListElement } from './article-list-element';
import { Article } from '../../../model/types/article';
import { ArticleListType } from '../../../model/types/article-list-type';

export default {
  title: 'entities/article/article-list-element',
  component: ArticleListElement,
} as ComponentMeta<typeof ArticleListElement>;

const Template: ComponentStory<typeof ArticleListElement> = args => (
  <ArticleListElement {...args} />
);

const article = {
  id: '1',
  title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
  image: 'https://picsum.photos/200/300',
  createdAt: '2021-10-10',
  views: 100,
  profile: {
    id: '1',
    first: 'John',
    last: 'Doe',
    avatar: 'https://picsum.photos/200/300',
  },
  topics: ['topic1', 'topic2'],
} as Article;

export const LightGrid = Template.bind({});
LightGrid.args = { article, listType: ArticleListType.GRID };

export const LightList = Template.bind({});
LightList.args = { article, listType: ArticleListType.LIST };

export const DarkGrid = Template.bind({});
DarkGrid.decorators = [ThemeDecorator(Theme.DARK)];
DarkGrid.args = { article, listType: ArticleListType.GRID };

export const DarkList = Template.bind({});
DarkList.decorators = [ThemeDecorator(Theme.DARK)];
DarkList.args = { article, listType: ArticleListType.LIST };
