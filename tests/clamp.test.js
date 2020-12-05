import clamp from '../src/clamp';

describe('Test Clamp', () => {
  describe('Test input (-10, -5, 5)', () => {
    test('Clamping -10 to lower bound -5 and upper bound 5 should get -5', () => {
      expect(clamp(-10, -5, 5)).toBe(-5);
    })
  })
  
  describe('Test input (10, -5, 5)', () => {
    test('Clamping 10 to lower bound -5 and upper bound 5 should get 5', () => {
      expect(clamp(10, -5, 5)).toBe(5);
    })
  })
})