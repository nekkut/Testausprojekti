import ceil from '../src/ceil';

describe('Test Ceil', () => {
  describe('Test input 4.123', () => {
    test('4.123 should convert to 5', () => {
      expect(ceil(4.123)).toBe(5);
    })
  })
  
  describe('Test input (4.123, 2)', () => {
    test('Input (4.123, 2) should cause output to 4.13', () => {
      expect(ceil(4.123, 2)).toBe(4.13);
    })
  })
  
  describe('Test input (4123, -2)', () => {
    test('Input (4123, -2) should cause output to 4200', () => {
      expect(ceil(4123, -2)).toBe(4200);
    })
  })
})