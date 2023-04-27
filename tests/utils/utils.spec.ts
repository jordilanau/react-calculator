import { add } from '../../src/utils/utils';

describe('Binary Functions', () => {
  it('should add two numbers and return the right value', () => {
    const a = 1;
    const b = 1;
    const expected = 2;
    const result = add(a, b);
    expect(result).toBe(expected);
  });
});
