import defaultToAny from '../src/defaultToAny';

describe('Test DefaultToAny', () => {
  describe('Test when output should be the first value', () => {
    test('Input (1, 2, 3) should cause output 1', () => {
      expect(defaultToAny(1, 2, 3)).toBe(1);
    })
  })
  
  describe('Test when output should be the second value', () => {
    test('Input (null, 1, 2) should cause output 1', () => {
      expect(defaultToAny(null, 1, 2)).toBe(1);
    })
  })
  
  describe('Test when output should be the third value', () => {
    test('Input (undefined, null, 2) should cause output 2', () => {
      expect(defaultToAny(undefined, null, 2)).toBe(2);
    })
  })
  
  describe('Test situation where is only null kind of inputs', () => {
    test('Input (undefined, null, NaN) should cause output NaN', () => {
      expect(defaultToAny(undefined, null, NaN)).toBe(NaN);
    })
  })
})