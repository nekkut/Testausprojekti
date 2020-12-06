import isObjectLike from '../src/isObjectLike';

describe('Test IsObjectLike', () => {
  test('Input {} should be object like', () => {
    expect(isObjectLike({})).toBe(true)
  })

  test('Array should be object like ', () => {
    expect(isObjectLike([1, 2, 3])).toBe(true)
  })

  test('Function should not be object like', () => {
    expect(isObjectLike(() => {})).toBe(false)
  })

  test('Null should not be object like', () => {
    expect(isObjectLike(null)).toBe(false)
  })
})