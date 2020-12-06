import camelCase from '../src/camelCase';

describe('Test Camel Case Positive', () => {
    test('Foo Bar should convert to fooBar', () => {
      expect(camelCase('Foo Bar')).toBe('fooBar');
    })
	
    test('--foo-bar-- should convert to fooBar', () => {
      expect(camelCase('--foo-bar--')).toBe('fooBar');
    })
	
    test('__FOO_BAR_ should convert to fooBar', () => {
      expect(camelCase('__FOO_BAR_')).toBe('fooBar');
    })
	
	
})

describe('Test Camel Case Negative', () => {
	
    test('null input', () => {
      expect(camelCase(null)).toBe('');
    })
	
    test('empty string', () => {
      expect(camelCase('')).toBe('');
    })

	test('just spaces',() => {
      expect(camelCase('                          ')).toBe('');
    })
})