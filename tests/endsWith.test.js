import endsWith from '../src/endsWith';

describe('Test EndsWith', () => {
  describe('Check if string.at(3) is the target', () => {
    test('Input (\'foobar\',\'b\',3) should cause output true', () => {
      expect(endsWith('foobar', 'b', 3)).toBe(true);
    })
  })
  
  describe('Check if string\'s end is the target', () => {
    test('Input (\'foobar\',\'r\') should cause output true', () => {
      expect(endsWith('foobar', 'r')).toBe(true);
    })
  })
  
  describe('Check if string\'s end is not the target', () => {
    test('Input (\'foobar\',\'a\') should cause output true', () => {
      expect(endsWith('foobar', 'a')).toBe(false);
    })
  })
})