import { memo, useMemo } from 'react';

import { useAppTranslation } from 'shared/libs/hooks';
import { classNames } from 'shared/libs/class-names';

import cls from './article-sort-list.module.scss';
import { Select } from 'shared/ui/select';
import { SelectOption } from 'shared/ui/select/ui/select';
import { ArticleSortField } from 'entities/article';
import { SortOrder } from 'shared/constants/ui';

interface Props {
  className?: string;
  sortField: ArticleSortField;
  order: SortOrder;
  onSortFieldChange: (sortField: ArticleSortField) => void;
  onOrderChange: (order: SortOrder) => void;
}

// FIXME add stories
const ArticleSortList = memo((props: Props) => {
  const { className, sortField, order, onSortFieldChange, onOrderChange } = props;

  const { t } = useAppTranslation('sort-list');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: SortOrder.ASC,
        label: t('asc', { ns: 'sort-list' }),
      },
      {
        value: SortOrder.DESC,
        label: t('desc', { ns: 'sort-list' }),
      },
    ],
    [],
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED_AT,
        label: t('sort-created-at', { ns: 'sort-list' }),
      },
      {
        value: ArticleSortField.VIEWS,
        label: t('sort-views', { ns: 'sort-list' }),
      },
      {
        value: ArticleSortField.TITLE,
        label: t('sort-title', { ns: 'sort-list' }),
      },
    ],
    [],
  );

  return (
    <div className={classNames(cls.wrapper, className)}>
      <Select
        className={cls.sortBy}
        label={t('sort-by', { ns: 'sort-list' })}
        value={sortField}
        options={sortFieldOptions}
        onChange={onSortFieldChange}
      />
      <Select
        className={cls.order}
        label={t('order', { ns: 'sort-list' })}
        value={order}
        options={orderOptions}
        onChange={onOrderChange}
      />
    </div>
  );
});

export { ArticleSortList };
