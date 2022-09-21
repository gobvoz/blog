import { Navbar } from 'widgets/ui/navbar';

import { AppRouter } from './providers/router';
import { useTheme } from './providers/theme-provider/lib/use-theme';

import { ThemeToggler } from 'shared/ui/theme-toggler';
import { classNames } from 'shared/lib/class-names';

import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(['app', theme], {})}>
      <Navbar />
      <AppRouter />
      <ThemeToggler onClick={toggleTheme} />
    </div>
  );
};
