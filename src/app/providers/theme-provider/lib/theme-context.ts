import { createContext } from 'react';

import { Theme } from 'shared/constants/theme';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
