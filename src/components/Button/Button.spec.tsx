import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

const logSpy = jest.spyOn(global.console, 'log');

describe('Button', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the Button component', () => {
    render(<Button span='1' value='1' />);
    const button = screen.getByRole('button', { name: '1' });

    expect(button).toBeInTheDocument();
  });

  it('passes the right value', async () => {
    render(<Button span='1' value='1' />);
    const button = screen.getByRole('button', { name: '1' });

    const user = userEvent.setup();
    await user.click(button);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('1');
  });
});
