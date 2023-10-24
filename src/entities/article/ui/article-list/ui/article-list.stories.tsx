import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { ArticleList } from './article-list';
import { Article } from '../../../model/types/article';

export default {
  title: 'entities/article/article-list',
  component: ArticleList,
} as ComponentMeta<typeof ArticleList>;

const article = {
  id: '1',
  title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
  image: 'https://picsum.photos/200/300',
  createdAt: '2021-10-10',
  views: 100,
} as Article;

const Template: ComponentStory<typeof ArticleList> = args => <ArticleList {...args} />;

export const Light = Template.bind({});
Light.args = { articleList: [article, article, article] };

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = { articleList: [article, article, article] };
