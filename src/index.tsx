import { createRoot } from 'react-dom/client';
import { Counter } from './components/counter/counter';

import './global.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <div>
    <Counter />
  </div>,
);
