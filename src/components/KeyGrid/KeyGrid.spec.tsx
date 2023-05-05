import { render, screen } from '@testing-library/react';
import keys from '../../data/keys';
import { KeyGrid } from './KeyGrid';

describe('KeyGrid', () => {
  it('renders the KeyGrid with the correct number of buttons', () => {
    render(<KeyGrid keys={keys} />);

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(keys.length);
  });
});
