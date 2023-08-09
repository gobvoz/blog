import { render, screen } from '@testing-library/react';
import { Avatar } from '../ui/avatar';

describe('avatar', () => {
  test('render', () => {
    render(<Avatar src="not-empty-link" data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });
  test('render with `small` class', () => {
    render(<Avatar src="not-empty-link" small data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('small');
  });
  test('render with `medium` class', () => {
    render(<Avatar src="not-empty-link" medium data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('medium');
  });
  test('render with `large` class', () => {
    render(<Avatar src="not-empty-link" large data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('large');
  });
  test('render without `src`', () => {
    const { container } = render(<Avatar large />);
    const element = container.querySelector('svg');
    expect(element).toBeInTheDocument();
  });
});
