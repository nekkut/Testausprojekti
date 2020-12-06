import isBoolean from '../src/isBoolean';

describe('Test IsBoolean Positive', () => {
  test('True is boolean', () => {
    expect(isBoolean(true)).toBe(true)
  })
  
  test('False is boolean', () => {
    expect(isBoolean(false)).toBe(true)
  })
  
  test('True equality is boolean',() => {
	  expect(isBoolean('foobar'==='foobar')).toBe(true);
  })
})

describe('Test IsBoolean Negative', () => {
  test('Null is not boolean', () => {
    expect(isBoolean(null)).toBe(false)
  })
  
  test('Empty is not boolean', () => {
    expect(isBoolean()).toBe(false)
  })
  
  test('Int is not boolean',() => {
	  const i = 1;
	  expect(isBoolean(i)).toBe(false);
  })
})