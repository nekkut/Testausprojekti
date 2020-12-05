import camelCase from '../src/camelCase';

describe('Test Camel Case', () => {
  describe('Test input Foo Bar', () => {
    test('Foo Bar should convert to fooBar', () => {
      expect(camelCase('Foo Bar')).toBe('fooBar');
    })
  })
  
  describe('Test input --foo-bar--', () => {
    test('--foo-bar-- should convert to fooBar', () => {
      expect(camelCase('--foo-bar--')).toBe('fooBar');
    })
  })
  
  describe('Test input __FOO_BAR_', () => {
    test('__FOO_BAR_ should convert to fooBar', () => {
      expect(camelCase('__FOO_BAR_')).toBe('fooBar');
    })
  })
})