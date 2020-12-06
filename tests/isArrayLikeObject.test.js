import isArrayLikeObject from '../src/isArrayLikeObject';

describe('Test IsArrayLikeObject', () => {
  test('Input [1, 2, 3] should be like array', () => {
    expect(isArrayLikeObject([1, 2, 3])).toBe(true)
  })

  test('Input \'abc\' should not be like array', () => {
    expect(isArrayLikeObject('abs')).toBe(false)
  })
})