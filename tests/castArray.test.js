import castArray from '../src/castArray';

describe('Test Cast Array', () => {
  describe('Test input fooBar', () => {
    test('Input fooBar should cause output [\'fooBar\']', () => {
      expect(castArray('fooBar')).toStrictEqual(['fooBar']);
    })
  })
  
  describe('Test input null', () => {
    test('Input null should cause output [null]', () => {
      expect(castArray(null)).toStrictEqual([null]);
    })
  })
})