import { DOMAttributes, FC, useRef } from 'react';

import { useCollapse } from 'app/providers/collapse-provider';

import { classNames } from 'shared/libs/class-names';
import { useInfinityScroll } from 'shared/libs/hooks';

import cls from './page-wrapper.module.scss';

interface Props extends DOMAttributes<HTMLDivElement> {
  className?: string;
  onScrollEnd?: () => void;
}

const PageWrapper: FC<Props> = props => {
  const { children, className, onScrollEnd } = props;
  const { collapsed } = useCollapse();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const mods = { [cls.sidebarCollapsed]: collapsed };

  useInfinityScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <div className={classNames(cls.pageWrapper, className, mods)} ref={wrapperRef}>
      {children} <div ref={triggerRef} />
    </div>
  );
};

export { PageWrapper };
