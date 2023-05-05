import { render, screen } from '@testing-library/react';
import { Display } from './Display';

describe('Display', () => {
  it('renders the Display component with the two operands', () => {
    render(<Display previous='1234 +' current='4321' />);

    const previous = screen.getByText(/1234 +/i);
    const current = screen.getByText(/4321/i);

    expect(previous).toBeInTheDocument();
    expect(current).toBeInTheDocument();
  });
});
