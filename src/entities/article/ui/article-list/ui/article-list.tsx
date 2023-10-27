import { memo } from 'react';

import { classNames } from 'shared/libs/class-names';
import cls from './article-list.module.scss';

import { Article } from '../../../model/types/article';
import { ListType } from 'features/list-type-switcher';
import { ArticleListElement, ArticleListElementSkeleton } from '../../article-list-element';

interface Props {
  className?: string;
  articleList: Article[];
  isLoading: boolean;
  listType: ListType;
}

const generateSkeletonsArray = (listType: ListType) => {
  const SkeletonArray = new Array(listType === ListType.GRID ? 12 : 3)
    .fill(0)
    .map((_, index) => <ArticleListElementSkeleton key={index} listType={listType} />);

  return SkeletonArray;
};

const ArticleList = memo((props: Props) => {
  const { className, articleList, isLoading, listType } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.articleList, cls[listType], className)}>
        {generateSkeletonsArray(listType)}
      </div>
    );
  }

  return (
    <div className={classNames(cls.articleList, cls[listType], className)}>
      {articleList.map(article => (
        <ArticleListElement key={article.id} article={article} listType={listType} />
      ))}
    </div>
  );
});

export { ArticleList };
