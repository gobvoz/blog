import { memo } from 'react';

import { classNames } from 'shared/libs/class-names';
import cls from './article-list.module.scss';

import { Article } from '../../../model/types/article';
import { ArticleListType } from '../../../model/types/article-list-type';
import { ArticleListElement } from '../../article-list-element';

interface Props {
  className?: string;
  articleList: Article[];
  isLoading: boolean;
  listType?: ArticleListType;
}

const ArticleList = memo((props: Props) => {
  const { className, articleList, isLoading, listType = ArticleListType.GRID } = props;

  return (
    <div className={classNames(cls.articleList, className)}>
      {articleList.map(article => (
        <ArticleListElement key={article.id} article={article} listType={listType} />
      ))}
    </div>
  );
});

export { ArticleList };
