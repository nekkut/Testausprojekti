import drop from '../src/drop';

const array = [1, 2, 3];

describe('Test Drop', () => {
  describe('Drop one element from array', () => {
    test('Input ([1, 2, 3]) should cause output [2, 3]', () => {
      expect(drop(array)).toMatchObject([2, 3]);
    })
  })
  
  describe('Drop two element from array', () => {
    test('Input ([1, 2, 3], 2) should cause output [3]', () => {
      expect(drop(array, 2)).toMatchObject([3]);
    })
  })
  
  describe('Drop three element from array', () => {
    test('Input ([1, 2, 3], 3) should cause output []', () => {
      expect(drop(array, 3)).toMatchObject([]);
    })
  })
  
  describe('Drop zero element from array', () => {
    test('Input ([1, 2, 3], 0) should cause output [1, 2, 3]', () => {
      expect(drop(array, 0)).toMatchObject([1, 2, 3]);
    })
  })
})