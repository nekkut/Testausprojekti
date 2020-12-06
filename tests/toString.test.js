import toString from '../src/toString';

describe('Test ToString Positive', () => {
  test('Number zero should convert to string \'0\'', () => {
    expect(toString(0)).toBe('0')
  })
  
  test('Array [1, 2, 3] zero should convert to string \'1,2,3\'', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3')
  })
})

 
  
  describe('Test ToString Positive', () => {
  
  test('Null should convert to string \'\'', () => {
    expect(toString(null)).toBe('')
  })
   test('Undefined should convert to string \'\'', () => {
    expect(toString(undefined)).toBe('')
  })
})