import { useEffect } from 'react';

// TODO: Rename it to useAppEffect
const useInitialEffect = (callback: () => void, dependencies: Array<unknown> = []) => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') callback();
  }, dependencies);
};

export { useInitialEffect };
