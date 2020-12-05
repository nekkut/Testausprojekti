import capitalize from '../src/capitalize';

describe('Test Capitalize', () => {
  test('FOOBAR should convert to fooBar', () => {
    expect(capitalize('FOOBAR')).toBe('Foobar');
  })
})