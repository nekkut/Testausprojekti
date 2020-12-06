import get from '../src/get';

const object = { 'a': [{ 'b': { 'c': 3 } }] }

describe('Test Get Positive', () => {
  test('Testing path that should work', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  })
})

describe('Test Get Negative', () => {
  test('Testing path that should not work', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  })
  
  test('Testing undefined object', () => {
    expect(get()).toBe(undefined);
  })
})