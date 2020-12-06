import isTypedArray from '../src/isTypedArray';

describe('Test IsTypedArray Positive', () => {
  test('Input new Uint8Array should be typed array', () => {
    expect(isTypedArray(new Uint8Array)).toBe(true)
  })
})

describe('Test IsTypedArray Negative', () => {
  test('Input new Uint8Array should be typed array', () => {
    expect(isTypedArray([1])).toBe(false)
  })
  
  test('Input [] should not be typed array', () => {
    expect(isTypedArray([])).toBe(false)
  })  
  
  test('Input null should not be typed array', () => {
    expect(isTypedArray(null)).toBe(false)
  })  
})