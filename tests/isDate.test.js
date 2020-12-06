import isDate from '../src/isDate';

describe('Test IsDate', () => {
  test('Input new Date should be date', () => {
    expect(isDate(new Date)).toBe(true)
  })
})