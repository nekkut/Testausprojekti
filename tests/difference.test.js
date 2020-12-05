import difference from '../src/difference';

const array = [1, 2]
const array2 = [2, 3]

describe('Test Difference', () => {
  test('Create from [1,2] new array where is not elemts of [2,3]', () => {
    expect(difference(array, array2)).toMatchObject([1]);
  })
})