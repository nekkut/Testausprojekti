import isLength from '../src/isLength';
import MAX_SAFE_INTEGER from '../src/isLength';

describe('Test IsLength Positive', () => {
  test('Negative number should not be length', () => {
    expect(isLength(-1)).toBe(false)
  })

  test('Zero should be length', () => {
    expect(isLength(0)).toBe(true)
  })
  

})
  describe('Test IsLength Negative', () => {
	test('Max integer should be length', () => {
      expect(isLength(MAX_SAFE_INTEGER)).toBe(true)
    })
	
    test('Null should not be legth', () => {
      expect(isLength(null)).toBe(false)
    })
	
	test('undefined should not be legth', () => {
      expect(isLength(undefined)).toBe(false)
    })
	
	test('NaN should not be legth', () => {
      expect(isLength(NaN)).toBe(false)
    })
	
	test('Inf should not be legth', () => {
      expect(isLength(Infinity)).toBe(false)
    })
  })