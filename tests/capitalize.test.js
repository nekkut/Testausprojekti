import capitalize from '../src/capitalize';

describe('Test Capitalize Positive', () => {
  test('FOOBAR should convert to fooBar', () => {
    expect(capitalize('FOOBAR')).toBe('Foobar');
  })
  
  test('*spaces* FOOBAR *spaces* should conver to fooBar', () => {
    expect(capitalize('  FOOBAR  ')).toBe('Foobar');
  })
  
  test('\'worst foobar ever\' should convert to \'Worst foobar ever\'', () => {
    expect(capitalize('worst foobar ever')).toBe('Worst foobar ever');
  })
  
  test('1foobar should convert to 1foobar', () => {
    expect(capitalize('1foobar')).toBe('1foobar');
  })
})

describe('Test Capitalize Negative', () => {
  test('null input', () => {
    expect(capitalize(null)).toBe('');
  })
  
  test('empty string', () => {
    expect(capitalize('')).toBe('');
  })
})