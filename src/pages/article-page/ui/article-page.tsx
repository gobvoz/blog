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

  useInitialEffect(() => {
    dispatch(fetchArticleList());
  }, [dispatch]);

  const handleListTypeChange = useCallback((type: ListType) => {
    dispatch(articleListActions.setListType(type));
  }, []);

  return (
    <DynamicModuleLoader reducerList={reducerList}>
      <ListTypeSwitcher
        className={cls.listTypeSwitcher}
        currentType={listType}
        onChange={handleListTypeChange}
      />
      <section>
        <ArticleList articleList={articleList} isLoading={isLoading} listType={listType} />
      </section>
    </DynamicModuleLoader>
  );
});

export { ArticlePage };
