import isDate from '../src/isDate';

describe('Test IsDate Positive', () => {
  test('Input new Date should be date', () => {
    expect(isDate(new Date)).toBe(true)
  })
  
  test('Input string should not be date', () => {
    expect(isDate('Mon January 1 2021')).toBe(false)
  })
  
})

describe('Test IsDate Negative', () => {
  test('Input null should not be date', () => {
    expect(isDate(null)).toBe(false)
  })
  
  test('Input undefined should not be date', () => {
    expect(isDate(undefined)).toBe(false)
  })
})