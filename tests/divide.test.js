import divide from '../src/divide';

describe('Test Divide', () => {
  test('Dividing 1 and 2 should be 0.5', () => {
    expect(divide(1, 2)).toBe(0.5);
  })
})