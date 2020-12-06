import eq from '../src/eq';

describe('Test Eq Positive', () => {
    test('Check is \'a\' equal with \'a\' output should be true', () => {
      expect(eq('a', 'a')).toBe(true);
    })
  
    test('Output should be false', () => {
      expect(eq('a', 'b')).toBe(false);
    })

    test('Output should be false', () => {
      expect(eq('a', Object('a'))).toBe(false);
    })

    test('Output should be true', () => {
      expect(eq(null, null)).toBe(true);
    })
	
	test('Output should be false', () => {
		expect(eq(null, 'null')).toBe(false);
	})
})