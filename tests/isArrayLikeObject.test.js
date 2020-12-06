import isArrayLikeObject from '../src/isArrayLikeObject';

describe('Test IsArrayLikeObject Positive', () => {
  test('Input [1, 2, 3] should be like array', () => {
    expect(isArrayLikeObject([1, 2, 3])).toBe(true)
  })

  test('Input \'abc\' should not be like array', () => {
    expect(isArrayLikeObject('abs')).toBe(false)
  })
})

describe('Test IsArrayLikeObject Negative', () => {
  test('Input null should not be like array', () => {
    expect(isArrayLikeObject(null)).toBe(false)
  })

  test('Input undefined should not be like array', () => {
    expect(isArrayLikeObject(undefined)).toBe(false)
  })
  
  test('Input function should not be like array', () => {
    expect(isArrayLikeObject(() => {})).toBe(false)
  })
})