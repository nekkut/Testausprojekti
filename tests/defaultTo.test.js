import defaultTo from '../src/defaultTo';

describe('Test DefaultTo', () => {
  describe('Test when output should be the default value', () => {
    test('Input (null, 1) should cause output 1', () => {
      expect(defaultTo(null, 1)).toBe(1);
    })
  })
  
  describe('Test when output should be the first value', () => {
    test('Input (1, 2) should cause output 1', () => {
      expect(defaultTo(null, 1)).toBe(1);
    })
  })
})