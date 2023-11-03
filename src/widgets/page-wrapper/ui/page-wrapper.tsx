import { DOMAttributes, FC, useRef } from 'react';

import { useCollapse } from 'app/providers/collapse-provider';

import { classNames } from 'shared/libs/class-names';
import { useAppDispatch, useInfinityScroll, useInitialEffect } from 'shared/libs/hooks';

import cls from './page-wrapper.module.scss';
import { restoreScrollActions } from 'features/restore-scroll/model/slice/restore-scroll.slice';
import { useLocation } from 'react-router-dom';
import { selectRestoreScrollByPath } from 'features/restore-scroll';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/store-provider';

interface Props extends DOMAttributes<HTMLDivElement> {
  className?: string;
  onScrollEnd?: () => void;
}

const PageWrapper: FC<Props> = props => {
  const { children, className, onScrollEnd } = props;
  const { collapsed } = useCollapse();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    selectRestoreScrollByPath(state, pathname),
  );

  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const mods = { [cls.sidebarCollapsed]: collapsed };

  useInfinityScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop } = e.currentTarget;

    dispatch(restoreScrollActions.setScrollPosition({ path: pathname, position: scrollTop }));
  };

  useInitialEffect(() => {
    if (scrollPosition) {
      wrapperRef.current?.scrollTo(0, scrollPosition);
    }
  });

  return (
    <div className={cls.wrapper} ref={wrapperRef} onScroll={handleScroll}>
      <div className={classNames(cls.innerWrapper, className, mods)}>
        {children} <div ref={triggerRef} />
      </div>
    </div>
  );
};

export { PageWrapper };
