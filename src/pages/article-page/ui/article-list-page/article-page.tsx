import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ArticleList } from 'entities/article';

import { DynamicModuleLoader, ReducerList } from 'shared/libs/components/dynamic-module-loader';
import { useAppDispatch, useInitialEffect } from 'shared/libs/hooks';

import { articleListReducer, getArticleList } from '../../model/slice/article-list';
import { selectArticleListLoading } from '../../model/selectors/select-article-list-loading';
import { selectArticleListType } from '../../model/selectors/select-article-list-type';
import { PageWrapper } from 'widgets/page-wrapper';
import { fetchNextArticleList } from '../../model/services/fetch-next-article-list';
import { initArticlePage } from '../../model/services/init-article-page';
import { ArticleListFilters } from '../article-list-filters/article-list-filters';
import { useSearchParams } from 'react-router-dom';

const reducerList: ReducerList = {
  articleList: articleListReducer,
};

const ArticlePage: FC = memo(() => {
  const dispatch = useAppDispatch();
  const articleList = useSelector(getArticleList.selectAll);
  const isLoading = useSelector(selectArticleListLoading);
  const listType = useSelector(selectArticleListType);

  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlePage(searchParams));
  }, [dispatch]);

  const handleScrollToBottom = useCallback(() => {
    dispatch(fetchNextArticleList());
  }, [dispatch]);

  //TODO ArticleInfinitiveList feature
  return (
    <PageWrapper onScrollEnd={handleScrollToBottom}>
      <DynamicModuleLoader reducerList={reducerList} leaveAfterUnmount>
        <ArticleListFilters />
        <ArticleList articleList={articleList} isLoading={isLoading} listType={listType} />
      </DynamicModuleLoader>
    </PageWrapper>
  );
});

export { ArticlePage };
