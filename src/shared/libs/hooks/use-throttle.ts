import { useCallback, useRef } from 'react';

const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
  const throttleRef = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: any[]) => {
      if (!throttleRef.current) {
        callback(...args);

        throttleRef.current = setTimeout(() => {
          throttleRef.current = null;
        }, delay);
      }
    },
    [callback, delay],
  );
};

export { useThrottle };
