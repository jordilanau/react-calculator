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

  it('removes the last digit when DEL is pressed', async () => {
    render(
      <AppProvider>
        <Calculator />
      </AppProvider>
    );

    const user = userEvent.setup();

    const one = screen.getByRole('button', { name: '1' });
    const two = screen.getByRole('button', { name: '2' });
    const three = screen.getByRole('button', { name: '3' });
    const DEL = screen.getByRole('button', { name: 'DEL' });

    let result = screen.getByTestId('currentOperand');

    expect(result.innerHTML).toBe('0');

    await user.click(one);
    await user.click(two);
    await user.click(three);

    result = screen.getByTestId('currentOperand');
    expect(result.innerHTML).toBe('123');

    await user.click(DEL);

    result = screen.getByTestId('currentOperand');
    expect(result.innerHTML).toBe('12');

    await user.click(DEL);

    result = screen.getByTestId('currentOperand');
    expect(result.innerHTML).toBe('1');
  });

  it('the current operand renders 0 when length is 1 and DEL is pressed', async () => {
    render(
      <AppProvider>
        <Calculator />
      </AppProvider>
    );

    const user = userEvent.setup();

    const three = screen.getByRole('button', { name: '3' });
    const DEL = screen.getByRole('button', { name: 'DEL' });

    let result = screen.getByTestId('currentOperand');

    expect(result.innerHTML).toBe('0');

    await user.click(three);

    result = screen.getByTestId('currentOperand');
    expect(result.innerHTML).toBe('3');

    await user.click(DEL);

    result = screen.getByTestId('currentOperand');
    expect(result.innerHTML).toBe('0');

    await user.click(DEL);

    result = screen.getByTestId('currentOperand');
    expect(result.innerHTML).toBe('0');
  });

  it('evaluates additions correctly', async () => {
    render(
      <AppProvider>
        <Calculator />
      </AppProvider>
    );

    const user = userEvent.setup();

    const one = screen.getByRole('button', { name: '1' });
    const add = screen.getByRole('button', { name: '+' });
    const equal = screen.getByRole('button', { name: '=' });

    let result = screen.getByTestId('currentOperand');

    expect(result.innerHTML).toBe('0');

    await user.click(one);
    await user.click(add);
    await user.click(one);

    let previous = screen.getByTestId('previousOperand');
    result = screen.getByTestId('currentOperand');
    expect(previous.innerHTML).toBe('1 +');
    expect(result.innerHTML).toBe('1');

    await user.click(equal);
    previous = screen.getByTestId('previousOperand');
    result = screen.getByTestId('currentOperand');
    expect(previous.innerHTML).toBe('');
    expect(result.innerHTML).toBe('2');
  });

  it('evaluates subtractions correctly', async () => {
    render(
      <AppProvider>
        <Calculator />
      </AppProvider>
    );

    const user = userEvent.setup();

    const one = screen.getByRole('button', { name: '1' });
    const sub = screen.getByRole('button', { name: '-' });
    const equal = screen.getByRole('button', { name: '=' });

    let result = screen.getByTestId('currentOperand');

    expect(result.innerHTML).toBe('0');

    await user.click(one);
    await user.click(sub);
    await user.click(one);

    let previous = screen.getByTestId('previousOperand');
    result = screen.getByTestId('currentOperand');
    expect(previous.innerHTML).toBe('1 -');
    expect(result.innerHTML).toBe('1');

    await user.click(equal);
    previous = screen.getByTestId('previousOperand');
    result = screen.getByTestId('currentOperand');
    expect(previous.innerHTML).toBe('');
    expect(result.innerHTML).toBe('0');
  });

  it('evaluates multiplications correctly', async () => {
    render(
      <AppProvider>
        <Calculator />
      </AppProvider>
    );

    const user = userEvent.setup();

    const two = screen.getByRole('button', { name: '2' });
    const mult = screen.getByRole('button', { name: '*' });
    const equal = screen.getByRole('button', { name: '=' });

    let result = screen.getByTestId('currentOperand');

    expect(result.innerHTML).toBe('0');

    await user.click(two);
    await user.click(mult);
    await user.click(two);

    let previous = screen.getByTestId('previousOperand');
    result = screen.getByTestId('currentOperand');
    expect(previous.innerHTML).toBe('2 *');
    expect(result.innerHTML).toBe('2');

    await user.click(equal);
    previous = screen.getByTestId('previousOperand');
    result = screen.getByTestId('currentOperand');
    expect(previous.innerHTML).toBe('');
    expect(result.innerHTML).toBe('4');
  });

  it('evaluates divisions correctly', async () => {
    render(
      <AppProvider>
        <Calculator />
      </AppProvider>
    );

    const user = userEvent.setup();

    const two = screen.getByRole('button', { name: '2' });
    const div = screen.getByRole('button', { name: '/' });
    const equal = screen.getByRole('button', { name: '=' });

    let result = screen.getByTestId('currentOperand');

    expect(result.innerHTML).toBe('0');

    await user.click(two);
    await user.click(div);
    await user.click(two);

    let previous = screen.getByTestId('previousOperand');
    result = screen.getByTestId('currentOperand');
    expect(previous.innerHTML).toBe('2 /');
    expect(result.innerHTML).toBe('2');

    await user.click(equal);
    previous = screen.getByTestId('previousOperand');
    result = screen.getByTestId('currentOperand');
    expect(previous.innerHTML).toBe('');
    expect(result.innerHTML).toBe('1');
  });

  it('choose operation chains operations correctly', async () => {
    render(
      <AppProvider>
        <Calculator />
      </AppProvider>
    );

    const user = userEvent.setup();

    const one = screen.getByRole('button', { name: '1' });
    const two = screen.getByRole('button', { name: '2' });
    const three = screen.getByRole('button', { name: '3' });
    const add = screen.getByRole('button', { name: '+' });
    const sub = screen.getByRole('button', { name: '-' });
    const mult = screen.getByRole('button', { name: '*' });
    const div = screen.getByRole('button', { name: '/' });
    const equal = screen.getByRole('button', { name: '=' });

    let result = screen.getByTestId('currentOperand');

    expect(result.innerHTML).toBe('0');

    await user.click(two);
    await user.click(add);
    await user.click(two);

    let previous = screen.getByTestId('previousOperand');
    result = screen.getByTestId('currentOperand');
    expect(previous.innerHTML).toBe('2 +');
    expect(result.innerHTML).toBe('2');

    await user.click(sub);
    await user.click(three);

    previous = screen.getByTestId('previousOperand');
    result = screen.getByTestId('currentOperand');
    expect(previous.innerHTML).toBe('4 -');
    expect(result.innerHTML).toBe('3');

    await user.click(mult);
    await user.click(three);

    previous = screen.getByTestId('previousOperand');
    result = screen.getByTestId('currentOperand');
    expect(previous.innerHTML).toBe('1 *');
    expect(result.innerHTML).toBe('3');

    await user.click(div);
    await user.click(one);

    previous = screen.getByTestId('previousOperand');
    result = screen.getByTestId('currentOperand');
    expect(previous.innerHTML).toBe('3 /');
    expect(result.innerHTML).toBe('1');

    await user.click(equal);
    previous = screen.getByTestId('previousOperand');
    result = screen.getByTestId('currentOperand');
    expect(previous.innerHTML).toBe('');
    expect(result.innerHTML).toBe('3');
  });

  it('does not evaluate a value when no operation is selected', async () => {
    render(
      <AppProvider>
        <Calculator />
      </AppProvider>
    );

    const user = userEvent.setup();

    const two = screen.getByRole('button', { name: '2' });
    const equal = screen.getByRole('button', { name: '=' });

    await user.click(two);
    await user.click(equal);

    const result = screen.getByTestId('currentOperand');
    const previous = screen.getByTestId('previousOperand');

    expect(result.innerHTML).toBe('2');
    expect(previous.innerHTML).toBe('');
  });

  it('returns Infinity when dividing by zero', async () => {
    render(
      <AppProvider>
        <Calculator />
      </AppProvider>
    );

    const user = userEvent.setup();

    const two = screen.getByRole('button', { name: '2' });
    const zero = screen.getByRole('button', { name: '0' });
    const div = screen.getByRole('button', { name: '/' });
    const equal = screen.getByRole('button', { name: '=' });

    await user.click(two);
    await user.click(div);
    await user.click(zero);
    await user.click(equal);

    const result = screen.getByTestId('currentOperand');

    expect(result.innerHTML).toBe('Infinity');
  });

  it('DEL makes currentOperand zero when Infinity', async () => {
    render(
      <AppProvider>
        <Calculator />
      </AppProvider>
    );

    const user = userEvent.setup();

    const two = screen.getByRole('button', { name: '2' });
    const zero = screen.getByRole('button', { name: '0' });
    const div = screen.getByRole('button', { name: '/' });
    const equal = screen.getByRole('button', { name: '=' });
    const del = screen.getByRole('button', { name: 'DEL' });

    await user.click(two);
    await user.click(div);
    await user.click(zero);
    await user.click(equal);
    await user.click(del);

    const result = screen.getByTestId('currentOperand');

    expect(result.innerHTML).toBe('0');
  });

  it('returns payload after adding digit with Infinity', async () => {
    render(
      <AppProvider>
        <Calculator />
      </AppProvider>
    );

    const user = userEvent.setup();

    const two = screen.getByRole('button', { name: '2' });
    const zero = screen.getByRole('button', { name: '0' });
    const div = screen.getByRole('button', { name: '/' });
    const equal = screen.getByRole('button', { name: '=' });
    const del = screen.getByRole('button', { name: 'DEL' });

    await user.click(two);
    await user.click(div);
    await user.click(zero);
    await user.click(equal);
    await user.click(two);

    const result = screen.getByTestId('currentOperand');

    expect(result.innerHTML).toBe('2');
  });
});
