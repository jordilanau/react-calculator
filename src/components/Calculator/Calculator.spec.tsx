import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppProvider } from '../../context/appContext';
import keys from '../../data/keys';
import { Calculator } from './Calculator';

describe('Calculator', () => {
  it('renders the calculator', () => {
    render(<Calculator />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(keys.length);
  });

  it('renders the right digit 0 to 9 and . in the current operand field', async () => {
    render(
      <AppProvider>
        <Calculator />
      </AppProvider>
    );

    const user = userEvent.setup();

    const one = screen.getByRole('button', { name: '1' });
    const two = screen.getByRole('button', { name: '2' });
    const three = screen.getByRole('button', { name: '3' });

    await user.click(one);
    await user.click(two);
    await user.click(three);

    const result = screen.getByText('123');
    expect(result).toBeInTheDocument();
    expect(result.innerHTML).toBe('123');
  });

  it('does not render multiple leading zeroes', async () => {
    render(
      <AppProvider>
        <Calculator />
      </AppProvider>
    );

    const user = userEvent.setup();

    const zero = screen.getByRole('button', { name: '0' });

    await user.click(zero);
    await user.click(zero);
    await user.click(zero);

    const result = screen.getByTestId('currentOperand');
    expect(result).toBeInTheDocument();
    expect(result.innerHTML).toBe('0');
  });

  it('renders the decimal point after the first zero when used', async () => {
    render(
      <AppProvider>
        <Calculator />
      </AppProvider>
    );

    const user = userEvent.setup();

    const decimal = screen.getByRole('button', { name: '.' });

    await user.click(decimal);

    const result = screen.getByTestId('currentOperand');
    expect(result).toBeInTheDocument();
    expect(result.innerHTML).toBe('0.');
  });

  it('does not render multiple decimal points in the same input', async () => {
    render(
      <AppProvider>
        <Calculator />
      </AppProvider>
    );

    const user = userEvent.setup();

    const decimal = screen.getByRole('button', { name: '.' });

    await user.click(decimal);
    await user.click(decimal);
    await user.click(decimal);

    const result = screen.getByTestId('currentOperand');
    expect(result).toBeInTheDocument();
    expect(result.innerHTML).toBe('0.');
  });

  it('resets the calculator when AC is pressed', async () => {
    render(
      <AppProvider>
        <Calculator />
      </AppProvider>
    );

    const user = userEvent.setup();

    const one = screen.getByRole('button', { name: '1' });
    const two = screen.getByRole('button', { name: '2' });
    const three = screen.getByRole('button', { name: '3' });
    const AC = screen.getByRole('button', { name: 'AC' });

    let result = screen.getByTestId('currentOperand');

    expect(result.innerHTML).toBe('0');

    await user.click(one);
    await user.click(two);
    await user.click(three);

    result = screen.getByTestId('currentOperand');
    expect(result.innerHTML).toBe('123');

    await user.click(AC);

    result = screen.getByTestId('currentOperand');
    expect(result.innerHTML).toBe('0');
  });
});
