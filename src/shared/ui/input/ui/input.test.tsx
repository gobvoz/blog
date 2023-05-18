import { render, screen } from '@testing-library/react';

import { Input } from 'shared/ui/input';

describe('input', () => {
  test('render', () => {
    render(<Input value="test" data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveDisplayValue('test');
  });
  test('render with class', () => {
    render(<Input className="test-class" value="test" data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveClass('test-class');
  });
});
