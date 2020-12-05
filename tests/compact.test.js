import compact from '../src/compact';

const array = [0, 1, false, 2, '', 3]

describe('Test Compact', () => {
  test('From array [0,1,false,2,\'\',3] should remove falsey values so output is [1,2,3]', () => {
    expect(compact(array)).toMatchObject([1,2,3]);
  })
})