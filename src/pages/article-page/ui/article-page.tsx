import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ArticleList } from 'entities/article';

import { DynamicModuleLoader, ReducerList } from 'shared/libs/components/dynamic-module-loader';
import { useAppDispatch, useInitialEffect } from 'shared/libs/hooks';

import cls from './article-page.module.scss';

import {
  articleListActions,
  articleListReducer,
  getArticleList,
} from '../model/slice/article-list';
import { fetchArticleList } from '../model/services/fetch-article-list';
import { selectArticleListLoading } from '../model/selectors/select-article-list-loading';
import { selectArticleListType } from '../model/selectors/select-article-list-type';
import { ListType, ListTypeSwitcher } from 'features/list-type-switcher';
import { PageWrapper } from 'widgets/page-wrapper';
import { fetchNextArticleList } from '../model/services/fetch-next-article-list';

const reducerList: ReducerList = {
  articleList: articleListReducer,
};

const ArticlePage: FC = memo(() => {
  const dispatch = useAppDispatch();
  const articleList = useSelector(getArticleList.selectAll);
  const isLoading = useSelector(selectArticleListLoading);
  const listType = useSelector(selectArticleListType);

  useInitialEffect(() => {
    dispatch(fetchArticleList({ page: 1 }));
  }, [dispatch]);

  const handleListTypeChange = useCallback(
    (type: ListType) => {
      dispatch(articleListActions.setListType(type));
    },
    [dispatch],
  );

  const handleScrollToBottom = useCallback(() => {
    dispatch(fetchNextArticleList());
  }, [dispatch]);

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
