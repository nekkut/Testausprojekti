import toInteger from '../src/toInteger';

describe('Test ToInteger Positive', () => {
  test('4.1 should be as integer 4', () => {
    expect(toInteger(4.1)).toBe(4);
  })

  test('Minimum value should be as integer 0', () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
  })
  
  test('Infinity should be as integer maximum integer', () => {
    expect(toInteger(Infinity)).toBe(Number.MAX_VALUE);
  })
})

describe('Test ToInteger Negative', () => {
  test('4.1 should be as integer 4', () => {
    expect(toInteger(4.1)).toBe(4);
  })
 
  test('null should be 0', () => {
    expect(toInteger(null)).toBe(0);
  })
  
   test('NaN should be 0', () => {
    expect(toInteger(null)).toBe(0);
  })
  
   test('string as parameter', () => {
    expect(toInteger('foobar')).toThrow(TypeError);
  })
})