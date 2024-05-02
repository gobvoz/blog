import { memo } from 'react';

import { classNames } from 'shared/libs/class-names';
import cls from './overlay.module.scss';

interface Props {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;

  inAnimation?: boolean;
  outAnimation?: boolean;
  noAnimation?: boolean;
}

const Overlay = memo((props: Props) => {
  const { className, children, onClick, inAnimation, outAnimation, noAnimation } = props;

  const mods = {
    [cls.overlayAnimationIn]: inAnimation,
    [cls.overlayAnimationOut]: outAnimation,
    [cls.overlayNoAnimation]: noAnimation,
  };

  return (
    <div className={classNames(cls.overlay, className, mods)} onClick={onClick}>
      {children}
    </div>
  );
});

export { Overlay };
