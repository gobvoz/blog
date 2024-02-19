import { useEffect } from 'react';

// TODO: Rename it to useAppEffect
const useInitialEffect = (callback: () => void, dependencies: Array<unknown> = []) => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') callback();
  }, dependencies);
};

export { useInitialEffect };
