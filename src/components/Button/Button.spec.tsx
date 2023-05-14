import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders the Button component', () => {
    render(<Button span='1' value='1' type='digit' />);
    const button = screen.getByRole('button', { name: '1' });

    expect(button).toBeInTheDocument();
  });
});
