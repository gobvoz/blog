import { render } from '@testing-library/react';

import { Input } from '../ui/input';

describe('input', () => {
  test('render', () => {
    const { container } = render(<Input label="test label" value="test" />);
    const element = container.querySelector('input');

    expect(container.textContent?.match(/test label/)).not.toBeNull();
    expect(element).toHaveDisplayValue('test');
  });
  test('render with class', () => {
    const { container } = render(<Input className="test-class" />);
    const element = container.firstElementChild;

    expect(element).toHaveClass('test-class');
  });
});
