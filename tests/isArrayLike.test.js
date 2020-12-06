import isArrayLike from '../src/isArrayLike';
import MAX_SAFE_INTEGER from '../src/isLength';

var array = [];

for (var i = 0; i < MAX_SAFE_INTEGER; i++) {
    array.push(1);
}

describe('Test IsArrayLike Positive', () => {
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

describe('Test IsArrayLike Negative', () => {
  test('new set should produce output false', () => {
    expect(isArrayLike(new Set)).toBe(false)
  })
  
  test('null should produce output false', () => {
    expect(isArrayLike(null)).toBe(false)
  })
  
  test('undefined should produce output false', () => {
    expect(isArrayLike(undefined)).toBe(false)
  })
})