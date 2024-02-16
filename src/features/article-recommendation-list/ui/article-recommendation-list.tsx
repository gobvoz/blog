import { memo } from 'react';

import { ListType } from 'features/list-type-switcher';

import { ArticleList } from 'entities/article';

import { classNames } from 'shared/libs/class-names';

import { useArticleRecommendationList } from '../api/article-recommendation-list-api';

interface Props {
  className?: string;

  id: string;
}

const ArticleRecommendationList = memo((props: Props) => {
  const { className, id } = props;

  const { isLoading, error, data: articleList } = useArticleRecommendationList('4');

  if (isLoading || error) {
    return null;
  }

  return (
    <ArticleList
      className={classNames(className)}
      articleList={articleList}
      listType={ListType.GRID}
      target="_blank"
      isLoading={isLoading}
    />
  );
});

export { ArticleRecommendationList };
