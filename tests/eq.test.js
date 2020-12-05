import eq from '../src/eq';

describe('Test Eq', () => {
  describe('Check is \'a\' equal with \'a\'', () => {
    test('Output should be true', () => {
      expect(eq('a', 'a')).toBe(true);
    })
  })
  
  describe('Check is \'a\' equal with \'b\'', () => {
    test('Output should be false', () => {
      expect(eq('a', 'b')).toBe(false);
    })
  })
  
  describe('Check is \'a\' equal with Object(\'a\')', () => {
    test('Output should be false', () => {
      expect(eq('a', Object('a'))).toBe(false);
    })
  })
  
  describe('Check is NaN equal with NaN', () => {
    test('Output should be true', () => {
      expect(eq(NaN, NaN)).toBe(true);
    })
  })
})