import isObject from '../src/isObject';

describe('Test IsObject', () => {
  test('Input {} should be object', () => {
    expect(isObject({})).toBe(true)
  })

  test('Array should be object ', () => {
    expect(isObject([1, 2, 3])).toBe(true)
  })

  test('Function should be object', () => {
    expect(isObject(() => {})).toBe(true)
  })

  test('Null should not be object', () => {
    expect(isObject(null)).toBe(false)
  })
})