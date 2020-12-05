import words from '../src/words';

describe('Test Words', () => {
  test('Splitting words from string (\'foo, bar, & baz\') should produce array [\'foo\', \'bar\', \'baz\']', () => {
    expect(words('foo, bar, & baz')).toMatchObject(['foo', 'bar', 'baz']);
  })
})