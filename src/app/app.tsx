import { Navbar } from 'widgets/ui/navbar';

import { AppRouter } from './providers/router';
import { useTheme } from './providers/theme-provider/lib/use-theme';

import { classNames } from 'shared/lib/class-names';

import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames(['app', theme], {})}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
