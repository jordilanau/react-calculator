import { render, screen } from '@testing-library/react';
import keys from '../../data/keys';
import { Calculator } from './Calculator';

describe('Calculator', () => {
  it('', () => {
    render(<Calculator />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(keys.length);
  });
});
