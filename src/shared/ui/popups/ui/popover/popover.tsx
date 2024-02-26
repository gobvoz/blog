import { memo } from 'react';

import { classNames } from 'shared/libs/class-names';
import cls from './popover.module.scss';
import { Popover } from '@headlessui/react';

interface Props {
  className?: string;

  trigger: React.ReactNode;
  children: React.ReactNode;
}

const MyPopover = memo((props: Props) => {
  const { className, trigger, children } = props;

  return (
    <Popover className={classNames(cls.wrapper, className)}>
      <Popover.Button className={cls.trigger}>{trigger}</Popover.Button>

      <Popover.Panel className={cls.itemList}>{children}</Popover.Panel>
    </Popover>
  );
});

export { MyPopover as Popover };
