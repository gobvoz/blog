import { useState, useMemo, FC } from 'react';

import { Theme } from 'shared/constants/theme';

import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeContextProps } from '../lib/theme-context';

const defaultTheme = () => (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme());

  const defaultProps = useMemo<ThemeContextProps>(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
