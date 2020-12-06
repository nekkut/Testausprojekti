import isEmpty from '../src/isEmpty';

describe('Test IsEmpty', () => {
  test('Input null should be empty', () => {
    expect(isEmpty(null)).toBe(true)
  })

  test('Input true should be empty', () => {
    expect(isEmpty(true)).toBe(true)
  })

  test('Input 1 should be empty', () => {
    expect(isEmpty(1)).toBe(true)
  })
  
  test('Input array of two elements should not be empty', () => {
    expect(isEmpty([1, 1])).toBe(false)
  })

  test('Input {x: 1} should be empty', () => {
    expect(isEmpty({x: 1})).toBe(false)
  })
  
  test('Input empty should be empty', () => {
    expect(isEmpty()).toBe(true)
  })
})