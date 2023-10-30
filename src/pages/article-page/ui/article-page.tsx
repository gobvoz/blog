import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ArticleList } from 'entities/article';

import { DynamicModuleLoader, ReducerList } from 'shared/libs/components/dynamic-module-loader';
import { useAppDispatch, useAppTranslation, useInitialEffect } from 'shared/libs/hooks';

import cls from './article-page.module.scss';

import {
  articleListActions,
  articleListReducer,
  getArticleList,
} from '../model/slice/article-list';
import { fetchArticleList } from '../model/services/fetch-article-list';
import { selectArticleListError } from '../model/selectors/select-article-list-error';
import { selectArticleListLoading } from '../model/selectors/select-article-list-loading';
import { selectArticleListType } from '../model/selectors/select-article-list-type';
import { ListType, ListTypeSwitcher } from 'features/list-type-switcher';
import { PageWrapper } from 'widgets/page-wrapper';
import { selectArticleListPage } from '../model/selectors/select-article-list-page';
import { selectArticleListHasMore } from '../model/selectors/select-article-list-has-more';

const reducerList: ReducerList = {
  articleList: articleListReducer,
};

const ArticlePage: FC = memo(() => {
  const { t } = useAppTranslation('article-page');
  const dispatch = useAppDispatch();
  const articleList = useSelector(getArticleList.selectAll);
  const error = useSelector(selectArticleListError);
  const isLoading = useSelector(selectArticleListLoading);
  const listType = useSelector(selectArticleListType);
  const page = useSelector(selectArticleListPage);
  const hasMore = useSelector(selectArticleListHasMore);

  useInitialEffect(() => {
    dispatch(
      fetchArticleList({
        page: 1,
      }),
    );
  }, [dispatch]);

  const handleListTypeChange = useCallback((type: ListType) => {
    dispatch(articleListActions.setListType(type));
  }, []);

  const handleScrollToBottom = useCallback(() => {
    if (hasMore && !isLoading) {
      dispatch(articleListActions.setPage(page + 1));
      dispatch(
        fetchArticleList({
          page: page + 1,
        }),
      );
    }
  }, [dispatch, page, hasMore, isLoading]);

  return (
    <PageWrapper onScrollEnd={handleScrollToBottom}>
      <DynamicModuleLoader reducerList={reducerList}>
        <ListTypeSwitcher
          className={cls.listTypeSwitcher}
          currentType={listType}
          onChange={handleListTypeChange}
        />
        <ArticleList articleList={articleList} isLoading={isLoading} listType={listType} />
      </DynamicModuleLoader>
    </PageWrapper>
  );
});

export { ArticlePage };
