import defaultTo from '../src/defaultTo';

describe('Test DefaultTo Positive', () => {
    test('Input (null, 1) should cause output 1', () => {
      expect(defaultTo(null, 1)).toBe(1);
    })

    test('Input (1, 2) should cause output 1', () => {
      expect(defaultTo(1, 2)).toBe(1);
    })
})

describe('Test DefaultTo Negative', () => {
    test('null as parameter should return undefined', () => {
      expect(defaultTo(null)).toBe(undefined);
    })

    test('Too many arguments should return undefined', () => {
      expect(defaultTo(null, 1,2)).toBe(undefined);
    })

})