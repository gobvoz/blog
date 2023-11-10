import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ArticleSortField } from 'entities/article';

import { ArticleSortList } from 'features/article-sort-list';

import { useAppDispatch, useDebounce } from 'shared/libs/hooks';
import { Input } from 'shared/ui/input';
import { SortOrder } from 'shared/constants/ui';

import cls from './article-list-filters.module.scss';

import { articleListActions } from '../../model/slice/article-list';
import { selectArticleListType } from '../../model/selectors/select-article-list-type';
import { selectArticleListOrder } from '../../model/selectors/select-article-list-order';
import { ListType, ListTypeSwitcher } from 'features/list-type-switcher';
import { selectArticleListSortField } from '../../model/selectors/select-article-list-sort-field';
import { selectArticleListSearch } from '../../model/selectors/select-article-list-search';
import { fetchArticleList } from '../../model/services/fetch-article-list';
import { ArticleTagList } from 'features/article-tag-list/ui/article-tag-list/article-tag-list';

const ArticleListFilters: FC = memo(() => {
  const dispatch = useAppDispatch();
  const listType = useSelector(selectArticleListType);
  const order = useSelector(selectArticleListOrder);
  const sortField = useSelector(selectArticleListSortField);
  const searchString = useSelector(selectArticleListSearch);

  const fetchData = useCallback(() => {
    dispatch(articleListActions.setPage(1));
    dispatch(fetchArticleList({ replace: true }));
  }, [dispatch]);

  const debouncedSearchChange = useDebounce(fetchData, 1000);

  const handleListTypeChange = useCallback(
    (type: ListType) => {
      dispatch(articleListActions.setListType(type));
    },
    [dispatch],
  );

  const handleSortFieldChange = useCallback(
    (sortField: ArticleSortField) => {
      dispatch(articleListActions.setSortField(sortField));

      fetchData();
    },
    [dispatch],
  );

  const handleOrderChange = useCallback(
    (order: SortOrder) => {
      dispatch(articleListActions.setOrder(order));

      fetchData();
    },
    [dispatch],
  );

  const handleSearchChange = useCallback(
    (searchString: string) => {
      dispatch(articleListActions.setSearch(searchString));

      debouncedSearchChange();
    },
    [dispatch],
  );

  return (
    <div className={cls.filterWrapper}>
      <div className={cls.innerWrapper}>
        <ArticleSortList
          sortField={sortField}
          order={order}
          onSortFieldChange={handleSortFieldChange}
          onOrderChange={handleOrderChange}
        />
        <ListTypeSwitcher
          className={cls.listTypeSwitcher}
          currentType={listType}
          onChange={handleListTypeChange}
        />
      </div>
      <Input label="Search..." value={searchString} onChange={handleSearchChange} />
      <ArticleTagList onTagChange={fetchData} />
    </div>
  );
});

export { ArticleListFilters };
