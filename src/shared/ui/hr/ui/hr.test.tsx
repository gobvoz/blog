import { render, screen } from '@testing-library/react';

import { Hr } from 'shared/ui/hr';

describe('hr', () => {
  test('render', () => {
    render(<Hr className="test-class" data-testid="hr" />);
    expect(screen.getByTestId('hr')).toBeInTheDocument();
  });
});
