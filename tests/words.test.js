import words from '../src/words';

describe('Test Words Positive', () => {
  test('Splitting words from string (\'foo, bar, & baz\') should produce array [\'foo\', \'bar\', \'baz\']', () => {
    expect(words('foo, bar, & baz')).toMatchObject(['foo', 'bar', 'baz']);
  })
})

describe('Test Words Negative', () => {
  test('Null input', () => {
    expect(() => words(null)).toThrow(TypeError)
  })
  
  test('Null input', () => {
    expect(() => words(null)).toThrow(TypeError)
  })
})
