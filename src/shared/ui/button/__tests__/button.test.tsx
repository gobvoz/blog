import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/button';

describe('button', () => {
  test('render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('render with `transparent` class', () => {
    render(<Button transparent>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('transparent');
  });
  test('render with `primary` class', () => {
    render(<Button primary>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('primary');
  });
  test('render with `loading` class', () => {
    render(<Button loading>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('loading');
  });
  test('render with `outline red` class', () => {
    render(<Button outlineRed>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('outlineRed');
  });
  test('render with `submit` type', () => {
    render(<Button type="submit">TEST</Button>);
    expect(screen.getByText('TEST')).toHaveAttribute('type', 'submit');
  });
});
