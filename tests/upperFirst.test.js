import upperFirst from '../src/upperFirst';

describe('Test Upper First', () => {
  describe('Test input foobar', () => {
    test('foobar should convert to Foobar', () => {
      expect(upperFirst('foobar')).toBe('Foobar');
    })
  })
  
  describe('Test input foobar', () => {
    test('FOOBAR should convert to Foobar', () => {
      expect(upperFirst('FOOBAR')).toBe('Foobar');
    })
  })
})