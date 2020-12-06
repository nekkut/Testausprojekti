import toNumber from '../src/toNumber';

describe('Test ToNumber Positive', () => {
  test('Number should be number', () => {
    expect(toNumber(4.1)).toBe(4.1)
  })

  test('String number should convert to number', () => {
    expect(toNumber('4.1')).toBe(4.1)
  })

  test('Minimum value should be minimum value', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE)
  })

  test('Infinity should be infinity', () => {
    expect(toNumber(Infinity)).toBe(Infinity)
  })
})

describe('Test ToNumber Negative', () => {
  test('NaN should be NaN', () => {
    expect(toNumber(NaN)).toBe(NaN)
  })

  test('String should be NaN', () => {
    expect(toNumber('foobar')).toBe(NaN)
  })

  test('Array should be NaN', () => {
    expect(toNumber([1,2])).toBe(NaN)
  })
})