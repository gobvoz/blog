import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from 'widgets/sidebar';

import { renderWithCollapse } from 'shared/libs/tests/render-with-collapse';

describe('sidebar', () => {
  test('render', () => {
    renderWithCollapse(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('click to toggle', () => {
    renderWithCollapse(<Sidebar />);

    const sidebarElement = screen.getByTestId('sidebar');
    const toggleButton = screen.getByTestId('sidebar-toggle');

    expect(sidebarElement).toBeInTheDocument();
    expect(sidebarElement).not.toHaveClass('collapsed');
    fireEvent.click(toggleButton);
    expect(sidebarElement).toHaveClass('collapsed');
  });
});
