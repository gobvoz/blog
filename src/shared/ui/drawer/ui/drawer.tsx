import { memo } from 'react';

import { classNames } from 'shared/libs/class-names';

import cls from './drawer.module.scss';
import { Overlay } from 'shared/ui/overlay';

interface Props {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const Drawer = memo((props: Props) => {
  const { className, children, isOpen, onClose } = props;

  const mods = {
    open: isOpen,
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay className={classNames(cls.drawer, className, mods)} onClick={onClose} noAnimation>
      {children}
    </Overlay>
  );
});

export { Drawer };
