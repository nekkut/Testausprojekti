import isArguments from '../src/isArguments';

describe('Test IsArguments', () => {
  test('input function() { return asd }() should produce output true', () => {
    expect(I(function() { return arguments }())).toBe(true)
  })
  test('Input [1, 2, 3] should produce output false', () => {
    expect(isArguments([1, 2, 3])).toBe(false)
  })
})