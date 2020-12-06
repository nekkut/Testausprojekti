import isBoolean from '../src/isBoolean';

describe('Test IsBoolean', () => {
  test('True is boolean', () => {
    expect(isBoolean(true)).toBe(true)
  })
  
  test('False is boolean', () => {
    expect(isBoolean(false)).toBe(true)
  })
})