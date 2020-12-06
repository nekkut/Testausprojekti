import isLength from '../src/isLength';
import MAX_SAFE_INTEGER from '../src/isLength';

describe('Test IsLength', () => {
  test('Negative number is not length', () => {
    expect(isLength(-1)).toBe(false)
  })

  test('Zero is length', () => {
    expect(isLength(0)).toBe(true)
  })
  
  describe('Not working test', () => {
	test('Max integer is length', () => {
      expect(isLength(MAX_SAFE_INTEGER)).toBe(true)
    })
  })
})