import at from '../src/at';

describe('Test At', () => {
  test('Input {\'a\':[{\'b\':{\'c\':3}},4]} should cause output [3,4]', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    expect(at(object, ['a[0].b.c', 'a[1]'])).toStrictEqual(['3', '4']);
  })
})