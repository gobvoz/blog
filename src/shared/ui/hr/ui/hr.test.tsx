import { render, screen } from '@testing-library/react';

import { Hr } from 'shared/ui/hr';

describe('hr', () => {
  test('render with class', () => {
    render(<Hr className="test-class" data-testId="hr" />);
    expect(screen.getByTestId('hr')).toHaveClass('test-class');
  });
});
