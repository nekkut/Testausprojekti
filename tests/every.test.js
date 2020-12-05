import every from '../src/every';

describe('Test Every', () => {
  describe('Array all elements are true', () => {
    test('Output should be true', () => {
      expect(every([true, 1])).toBe(true);
    })
  })
  
  describe('Array have element that is not true', () => {
    test('Output should be false', () => {
      expect(every([true, false])).toBe(false);
    })
  })
})