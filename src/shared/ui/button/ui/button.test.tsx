import { render, screen } from '@testing-library/react';
import { Button, ButtonMod } from 'shared/ui/button';

describe('button', () => {
  test('render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('render with class', () => {
    render(<Button className={ButtonMod.TRANSPARENT}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass(ButtonMod.TRANSPARENT);
  });
});
