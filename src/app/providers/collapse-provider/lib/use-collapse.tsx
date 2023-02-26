import { useContext } from 'react';

import { LOCAL_STORAGE_COLLAPSE_KEY } from 'shared/constants/local-storage-key';

import { CollapseContext } from './collapse.context';

interface UseCollapseResult {
  collapsed: boolean;
  toggleCollapse: () => void;
}

export const useCollapse = (): UseCollapseResult => {
  const { collapsed, setCollapse } = useContext(CollapseContext);

  const toggleCollapse = () => {
    setCollapse(!collapsed);
    localStorage.setItem(LOCAL_STORAGE_COLLAPSE_KEY, collapsed ? 'false' : 'true');
  };

  return { collapsed, toggleCollapse };
};
