import { render, screen } from '@testing-library/react';
import { Title } from '../../../src/components/Title/Title';

describe('Title', () => {
  it('should render the title', () => {
    render(<Title />);

    const title = screen.getByText(/title/i);
    expect(title).toBeInTheDocument();
  });
});
