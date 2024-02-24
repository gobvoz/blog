import { memo } from 'react';

import GridIcon from 'shared/assets/icons/grid.svg';
import ListIcon from 'shared/assets/icons/list.svg';

import { classNames } from 'shared/libs/class-names';
import cls from './list-type-switcher.module.scss';

import { Icon } from 'shared/ui/icon';
import { Button } from 'shared/ui/button';
import { ListType } from '../model/const/list-type';

interface Props {
  className?: string;
  currentType: ListType;
  onChange: (type: ListType) => void;
}

const ListTypeSwitcher = memo((props: Props) => {
  const { className, currentType, onChange } = props;

  const handleGridType = () => {
    onChange(ListType.GRID);
  };
  const handleListType = () => {
    onChange(ListType.LIST);
  };

  return (
    <div className={classNames(cls.switcher, className)}>
      <Button icon checked={currentType === ListType.GRID} onClick={handleGridType}>
        <Icon className={classNames(cls.icon)} Svg={GridIcon} />
      </Button>
      <Button icon checked={currentType === ListType.LIST} onClick={handleListType}>
        <Icon className={cls.icon} Svg={ListIcon} />
      </Button>
    </div>
  );
});

export { ListTypeSwitcher };
