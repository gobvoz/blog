import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from 'widgets/sidebar';

import { renderWithTranslation } from 'shared/lib/tests/render-with-translation';

describe('sidebar', () => {
  test('render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('click to toggle', () => {
    renderWithTranslation(<Sidebar />);

    const sidebarElement = screen.getByTestId('sidebar');
    const toggleButton = screen.getByTestId('sidebar-toggle');

    expect(sidebarElement).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(sidebarElement).toHaveClass('collapsed');
  });
});
