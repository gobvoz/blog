import { useState, useMemo } from 'react';

import { CollapseContext } from '../lib/collapse.context';

export const LOCAL_STORAGE_COLLAPSE_KEY = 'collapsed';

const savedCollapse = localStorage.getItem(LOCAL_STORAGE_COLLAPSE_KEY) === 'true';

interface Props {
  children: React.ReactNode;
}

export const CollapseProvider = ({ children }: Props) => {
  const [collapsed, setCollapse] = useState(savedCollapse);

  const defaultProps = useMemo(() => ({ collapsed, setCollapse }), [collapsed]);

  return <CollapseContext.Provider value={defaultProps}>{children}</CollapseContext.Provider>;
};
