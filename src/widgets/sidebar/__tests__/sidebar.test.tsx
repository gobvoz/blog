import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from 'widgets/sidebar';

import { componentRender } from 'shared/libs/tests/component-render';

describe('sidebar', () => {
  test('render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('click to toggle', () => {
    componentRender(<Sidebar />);

    const sidebarElement = screen.getByTestId('sidebar');
    const toggleButton = screen.getByTestId('sidebar-toggle');

    expect(sidebarElement).toBeInTheDocument();
    expect(sidebarElement).not.toHaveClass('collapsed');
    fireEvent.click(toggleButton);
    expect(sidebarElement).toHaveClass('collapsed');
  });
});
