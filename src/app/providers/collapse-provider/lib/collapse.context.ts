import { createContext } from 'react';

export interface Props {
  collapsed?: boolean;
  setCollapse?: (collapsed: boolean) => void;
}

export const CollapseContext = createContext<Props>({});
