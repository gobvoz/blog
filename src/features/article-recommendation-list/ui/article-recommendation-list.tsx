import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { ListType } from 'features/list-type-switcher';

import { ArticleList } from 'entities/article';

import { DynamicModuleLoader } from 'shared/libs/components/dynamic-module-loader';
import { TextBlock } from 'shared/ui/text-block';
import { useAppDispatch, useInitialEffect } from 'shared/libs/hooks';
import { classNames } from 'shared/libs/class-names';

import {
  articleRecommendationListReducer,
  selectArticleRecommendationList,
} from '../model/slice/article-recommendation-list';
import { selectArticleRecommendationListLoading } from '../model/selectors/select-article-recommendation-list-loading';
import { selectArticleRecommendationListError } from '../model/selectors/select-article-recommendation-list-error';
import { fetchArticleRecommendationList } from '../model/services/fetch-article-recommendation-list';

interface Props {
  className?: string;

  id: string;
}

const reducerList = {
  articleRecommendationList: articleRecommendationListReducer,
};

const ArticleRecommendationList = memo((props: Props) => {
  const { className, id } = props;
  const { t } = useTranslation('article-detail-page');

  const isLoading = useSelector(selectArticleRecommendationListLoading);
  const data = useSelector(selectArticleRecommendationList.selectAll);
  const error = useSelector(selectArticleRecommendationListError);

  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchArticleRecommendationList(id));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducerList={reducerList}>
      <TextBlock header={t('recommendations', { ns: 'article-detail-page' })} />
      <ArticleList
        className={classNames(className)}
        articleList={data}
        listType={ListType.GRID}
        target="_blank"
        isLoading={isLoading}
      />
    </DynamicModuleLoader>
  );
});

export { ArticleRecommendationList };
