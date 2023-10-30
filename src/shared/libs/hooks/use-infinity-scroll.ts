import { RefObject, useEffect } from 'react';

export interface UseInfinityScrollParams {
  callback?: () => void;
  triggerRef: RefObject<HTMLDivElement>;
  wrapperRef: RefObject<HTMLDivElement>;
}

export const useInfinityScroll = (params: UseInfinityScrollParams) => {
  const { callback, triggerRef, wrapperRef } = params;

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    if (!triggerRef.current || !wrapperRef.current || !callback) {
      return;
    }

    const options = {
      root: wrapperRef.current,
      rootMargin: '500px',
      threshold: 1.0,
    };

    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback();
        }
      });
    }, options);

    observer.observe(triggerRef.current);

    return () => {
      if (observer && triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, [callback]);
};
