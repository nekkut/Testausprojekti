import isArguments from '../src/isArguments';

describe('Test IsArguments', () => {
  test('input function() { return asd }() should produce output true', () => {
    expect(isArguments(function() { return arguments }())).toBe(true)
  })
  test('input [1, 2, 3] should produce output false', () => {
    expect(isArguments([1, 2, 3])).toBe(false)
  })
})