import endsWith from '../src/endsWith';

describe('Test EndsWith Positive', () => {

    test('Input (\'foobar\',\'b\',3) should cause output true', () => {
      expect(endsWith('foobar', 'b', 3)).toBe(true);
    })
    test('Input (\'foobar\',\'r\') should cause output true', () => {
      expect(endsWith('foobar', 'r')).toBe(true);
    })
  
    test('Input (\'foobar\',\'a\') should cause output true', () => {
      expect(endsWith('foobar', 'a')).toBe(false);
    })

})

describe('Test EndsWith Negative', () => {

    test('Input with negative index should cause output false', () => {
      expect(endsWith('foobar', 'b', -3)).toBe(false);
    })
	
    test('Empty arguments should cause throw TypeError', () => {
      expect(endsWith(null, null)).toThrow(TypeError);
    })
  
})