import add from '../src/add';

describe('Test Add Positive', () => {
  test('Adding 6 and 4 should be 10', () => {
    expect(add(6,4)).toBe(10);
  })
  
  test('Adding -1 and 1 should be 0',() => {
	expect(add(-1,1)).toBe(0);
  })
  test('Adding -1 and 1 should be 0, negative as second parameter',() => {
	expect(add(1,-1)).toBe(0);  
  })
  test('Adding 0 and -1 should be -1',() => {
	expect(add(0,-1)).toBe(-1);
  })
  test('Adding 0 and 0 should be 0',() => {
	expect(add(0,0)).toBe(0);
  }) 
})

describe('Test Add Negative', () => {
  test('adding null with a number should return the number',() => {
	expect(add(null,2)).toBe(2);
  })
  test('null as second parameter',() => {
	expect(add(2,null)).toBe(2);
  }) 
  test('null as both parameters',() => {
	expect(add(null,null)).toBe(0);
  }) 
})