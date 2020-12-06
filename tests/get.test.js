import get from '../src/get';

const object = { 'a': [{ 'b': { 'c': 3 } }] }

describe('Test Get', () => {
  test('Testing path that should work', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  })
  
  test('Testing path that should not work', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  })
})