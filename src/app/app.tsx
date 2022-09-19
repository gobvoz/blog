import { Link } from 'react-router-dom';

import { AppRouter } from './providers/router';

import { useTheme } from './providers/theme-provider/lib/use-theme';
import { classNames } from 'shared/lib/class-names';

import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(['app', theme], {})}>
      <Link to="/main">Main</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/profile">Profile</Link>

      <AppRouter />

      <button className="button" onClick={toggleTheme}>
        toggle
      </button>
    </div>
  );
};
