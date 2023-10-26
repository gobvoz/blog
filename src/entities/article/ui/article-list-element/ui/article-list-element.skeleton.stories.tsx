import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

import { ArticleListType } from '../../../model/types/article-list-type';
import { ArticleListElementSkeleton } from './article-list-element.skeleton';

export default {
  title: 'entities/article/article-element-skeleton',
  component: ArticleListElementSkeleton,
} as ComponentMeta<typeof ArticleListElementSkeleton>;

const Template: ComponentStory<typeof ArticleListElementSkeleton> = args => (
  <ArticleListElementSkeleton {...args} />
);

export const LightGrid = Template.bind({});
LightGrid.args = { listType: ArticleListType.GRID };

export const LightList = Template.bind({});
LightList.args = { listType: ArticleListType.LIST };

export const DarkGrid = Template.bind({});
DarkGrid.decorators = [ThemeDecorator(Theme.DARK)];
DarkGrid.args = { listType: ArticleListType.GRID };

export const DarkList = Template.bind({});
DarkList.decorators = [ThemeDecorator(Theme.DARK)];
DarkList.args = { listType: ArticleListType.LIST };
