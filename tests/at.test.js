import at from '../src/at';

describe('Test At Positive', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
  test('Input {\'a\':[{\'b\':{\'c\':3}},4]} should cause output [3,4]', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    expect(at(object, ['a[0].b.c', 'a[1]'])).toStrictEqual(['3', '4']);
  })
})

describe('Test At Negative', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
 
 test('bad path', () => {
    expect(at(object, ['bad_path'])).toStrictEqual([undefined]);
  })
  test('bad object', () => {
    expect(at(null, ['bad_object'])).toStrictEqual([undefined]);
  })
})