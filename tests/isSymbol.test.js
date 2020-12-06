import isSymbol from '../src/isSymbol';

describe('Test IsSymbolLike', () => {
  test('Input \'fooBar\' should not be symbol like', () => {
    expect(isSymbol('fooBar')).toBe(false)
  })

  test('Input Symbol.iterator should be symbol like', () => {
    expect(isSymbol(Symbol.iterator)).toBe(true)
  })
})