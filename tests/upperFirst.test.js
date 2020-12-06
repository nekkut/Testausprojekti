import upperFirst from '../src/upperFirst';

describe('Test Upper First Positive', () => {

  test('foobar should convert to Foobar', () => {
    expect(upperFirst('foobar')).toBe('Foobar');
  })

  test('FOOBAR should convert to Foobar', () => {
    expect(upperFirst('FOOBAR')).toBe('FOOBAR');
	  })
})
  
  describe('Test Upper First Negative', () => {
    test('null should convert to \'\'', () => {
      expect(upperFirst(null)).toBe('')
  })
  
    test('undefined should convert to \'\'', () => {
      expect(upperFirst(undefined)).toBe('')
  })
})