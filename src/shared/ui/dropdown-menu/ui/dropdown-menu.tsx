import React, { FC, Fragment, memo } from 'react';
import { Menu } from '@headlessui/react';

import { classNames } from 'shared/libs/class-names';

import cls from './dropdown-menu.module.scss';

interface DropDownItem {
  content?: React.ReactNode;
  onClick?: () => void;
}

interface DropDownProps {
  className?: string;
  itemList: DropDownItem[];
  trigger: React.ReactNode;
}

interface Props {
  className?: string;
  options: DropDownProps;
}

const DropdownMenu: FC<Props> = memo((props: Props) => {
  const { className, options } = props;

  const { trigger, itemList } = options;
  return (
    <div className={classNames(cls.wrapper, className)}>
      <Menu>
        <Menu.Button className={cls.button}>{trigger}</Menu.Button>
        <Menu.Items className={cls.itemList}>
          {itemList.map((item, index) => (
            <Menu.Item as={Fragment} key={index}>
              {({ active }) => (
                <button
                  className={classNames(cls.item, { [cls.active]: active })}
                  onClick={item.onClick}>
                  {item.content}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
});

export { DropdownMenu, DropDownProps, DropDownItem };
