import { useState, useMemo } from 'react';

import { LOCAL_STORAGE_COLLAPSE_KEY } from 'shared/constants/local-storage-key';

import { CollapseContext } from '../lib/collapse.context';

const savedCollapse = localStorage.getItem(LOCAL_STORAGE_COLLAPSE_KEY) === 'true';

interface Props {
  children: React.ReactNode;
  initialValue?: boolean;
}

export const CollapseProvider = ({ children, initialValue }: Props) => {
  const [collapsed, setCollapse] = useState(
    initialValue !== undefined ? initialValue : savedCollapse,
  );

  const defaultProps = useMemo(() => ({ collapsed, setCollapse }), [collapsed]);

  return <CollapseContext.Provider value={defaultProps}>{children}</CollapseContext.Provider>;
};
