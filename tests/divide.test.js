import divide from '../src/divide';

describe('Test Divide Positive', () => {
  test('Dividing 4 and 2 should be 2', () => {
    expect(divide(4, 2)).toBe(2);
  })
	
  test('Dividing 1 and 2 should be 0.5', () => {
    expect(divide(1, 2)).toBe(0.5);
  })
  
  test('Dividing 5.2 and 2.6 should be 2', () => {
    expect(divide(5.2, 2.6)).toBe(2);
  })
  
})

describe('Test Divide Negative', () => {
  test('Dividing with 0 should return NaN', () => {
    expect(divide(1, 0)).toBe(NaN);
  })
	
  test('Dividing 0 with 0 should return NaN', () => {
    expect(divide(0, 0)).toBe(NaN);
  })
  
  test('Dividing with inf should be 0 ', () => {
    expect(divide(1, Infinity)).toBe(0);
  })
  
  test('Dividing inf with inf should be NaN ', () => {
    expect(divide(Infinity, Infinity)).toBe(NaN);
  })
})