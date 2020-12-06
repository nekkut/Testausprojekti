import difference from '../src/difference';

const array = [1, 2]
const array2 = [2, 3]

describe('Test Difference Positive', () => {
  test('Create from [1,2] new array where is not elemts of [2,3]', () => {
    expect(difference(array, array2)).toMatchObject([1]);
  })
  
  test('Create from [2,3] new array where is not elemts of [1,2]', () => {
    expect(difference(array2, array)).toMatchObject([3]);
  })
  
  test('Same array should output no difference', () => {
    expect(difference(array, array)).toMatchObject([]);
  })
})

describe('Test Difference Negative', () => {
  test('Compare null to array should output empty array', () => {
    expect(difference(null, array)).toMatchObject([]);
  })
  
  test('Compare array to null should output array', () => {
    expect(difference(array, null)).toMatchObject(array);
  })
  
  test('Compare null to null should output empty array', () => {
    expect(difference(null, null)).toMatchObject([]);
  })
  
  test('No comparison should return the input', () => {
	  expect(difference(array)).toMatchObject(array);
  })
})