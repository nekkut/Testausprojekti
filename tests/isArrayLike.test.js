import isArrayLike from '../src/isArrayLike';
import MAX_SAFE_INTEGER from '../src/isLength';

var array = [];

for (var i = 0; i < MAX_SAFE_INTEGER; i++) {
    array.push(1);
}

describe('Test IsArrayLike', () => {
  test('Empty array should produce output true', () => {
    expect(isArrayLike([])).toBe(true)
  })
  
  test('Array with one element should produce output true', () => {
    expect(isArrayLike([1])).toBe(true)
  })
  
  test('Array with MAX_SAFE_INTEGER elements should produce output true', () => {
    expect(isArrayLike(array)).toBe(true)
  })
})