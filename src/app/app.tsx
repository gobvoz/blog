import { Navbar } from 'shared/ui/navbar';

import { AppRouter } from './providers/router';

import { useTheme } from './providers/theme-provider/lib/use-theme';
import { classNames } from 'widgets/lib/class-names';

import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(['app', theme], {})}>
      <Navbar />
      <AppRouter />

      <button className="button" onClick={toggleTheme}>
        toggle
      </button>
    </div>
  );
};
