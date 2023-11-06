import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ArticleSortField } from 'entities/article';

import { ArticleSortList } from 'features/article-sort-list';

import { useAppDispatch } from 'shared/libs/hooks';
import { Input } from 'shared/ui/input';
import { SortOrder } from 'shared/constants/ui';

import cls from './article-list-filters.module.scss';

import { articleListActions } from '../../model/slice/article-list';
import { selectArticleListType } from '../../model/selectors/select-article-list-type';
import { selectArticleListOrder } from '../../model/selectors/select-article-list-order';
import { ListType, ListTypeSwitcher } from 'features/list-type-switcher';
import { selectArticleListSortField } from '../../model/selectors/select-article-list-sort-field';
import { selectArticleListSearch } from '../../model/selectors/select-article-list-search';

const ArticleListFilters: FC = memo(() => {
  const dispatch = useAppDispatch();
  const listType = useSelector(selectArticleListType);
  const order = useSelector(selectArticleListOrder);
  const sortField = useSelector(selectArticleListSortField);
  const searchString = useSelector(selectArticleListSearch);

  const handleListTypeChange = useCallback(
    (type: ListType) => {
      dispatch(articleListActions.setListType(type));
    },
    [dispatch],
  );

  const handleSortFieldChange = useCallback(
    (sortField: ArticleSortField) => {
      dispatch(articleListActions.setSortField(sortField));
    },
    [dispatch],
  );

  const handleOrderChange = useCallback(
    (order: SortOrder) => {
      dispatch(articleListActions.setOrder(order));
    },
    [dispatch],
  );

  const handleSearchChange = useCallback(
    (searchString: string) => {
      dispatch(articleListActions.setSearch(searchString));
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
    </div>
  );
});

export { ArticleListFilters };
