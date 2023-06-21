import { useEffect } from 'react';

const useInitialEffect = (callback: () => void) => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') callback();
  }, []);
};

export { useInitialEffect };
