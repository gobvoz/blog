import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { ArticleListElement } from './article-list-element';
import { Article } from '../../../model/types/article';

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
  image: 'https://picsum.photos/200/300',
  createdAt: '2021-10-10',
  views: 100,
} as Article;

export const Light = Template.bind({});
Light.args = { article };

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = { article };
