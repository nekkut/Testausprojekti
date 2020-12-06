import castArray from '../src/castArray';

describe('Test Cast Array Positive', () => {
  describe('Test input fooBar', () => {
	  
    test('Input fooBar should cause output [\'fooBar\']', () => {
      expect(castArray('fooBar')).toStrictEqual(['fooBar']);
    })
	
	test('array as input should cause output [array]', () => {
	  const array = [1,'fooBar']
      expect(castArray(array)).toStrictEqual([array]);
    })
	
	test('object as input should cause output [object]', () => {
	  const object = {a: 'foo', b:'Bar'}
      expect(castArray(object)).toStrictEqual([object]);
    })
  })
  
  describe('Test Cast Array Negative', () => { 
    test('Input null should cause output [null]', () => {
      expect(castArray(null)).toStrictEqual([null]);
    })
	
	test('Input undefined should cause output undefined', () => {
      expect(castArray(undefined)).toStrictEqual([undefined]);
    })
  })
})