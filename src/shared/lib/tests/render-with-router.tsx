import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const renderWithRouter = (component: ReactNode) => {
  return <BrowserRouter>{component}</BrowserRouter>;
};
