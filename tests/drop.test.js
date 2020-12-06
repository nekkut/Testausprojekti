import drop from '../src/drop';

const array = [1, 2, 3];

describe('Test Drop Positive', () => {
    test('Input ([1, 2, 3]) should cause output [2, 3]', () => {
      expect(drop(array)).toMatchObject([2, 3]);
    })

    test('Input ([1, 2, 3], 2) should cause output [3]', () => {
      expect(drop(array, 2)).toMatchObject([3]);
    })
  
    test('Input ([1, 2, 3], 3) should cause output []', () => {
      expect(drop(array, 3)).toMatchObject([]);
    })

    test('Input ([1, 2, 3], 0) should cause output [1, 2, 3]', () => {
      expect(drop(array, 0)).toMatchObject([1, 2, 3]);
    })
})

describe('Test Drop Negative', () => {
    test('Input null should cause output []', () => {
      expect(drop(null)).toMatchObject([]);
    })

    test('Input ([1, 2, 3], -1) should cause output [1,2,3]', () => {
      expect(drop(array, -1)).toMatchObject([1,2,3]);
    })
})