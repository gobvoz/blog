import { useCallback, useMemo, useState } from 'react';

interface UseHoverBind {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

type UseHover = [boolean, UseHoverBind];

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return useMemo<UseHover>(
    () => [isHovered, { onMouseEnter, onMouseLeave }],
    [isHovered, onMouseEnter, onMouseLeave],
  );
};
