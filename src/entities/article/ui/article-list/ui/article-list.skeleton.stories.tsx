import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { ArticleList } from './article-list';
import { Article } from '../../../model/types/article';
import { ListType } from 'features/list-type-switcher';

export default {
  title: 'entities/article/article-list-skeleton',
  component: ArticleList,
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = args => <ArticleList {...args} />;

export const LightGrid = Template.bind({});
LightGrid.args = {
  listType: ListType.GRID,
  isLoading: true,
};

export const LightList = Template.bind({});
LightList.args = {
  listType: ListType.LIST,
  isLoading: true,
};

export const DarkGrid = Template.bind({});
DarkGrid.decorators = [ThemeDecorator(Theme.DARK)];
DarkGrid.args = {
  listType: ListType.GRID,
  isLoading: true,
};

export const DarkList = Template.bind({});
DarkList.decorators = [ThemeDecorator(Theme.DARK)];
DarkList.args = {
  listType: ListType.LIST,
  isLoading: true,
};
