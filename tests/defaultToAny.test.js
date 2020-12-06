import defaultToAny from '../src/defaultToAny';

describe('Test DefaultToAny Positive', () => {
    test('Input (1, 2, 3) should cause output 1', () => {
      expect(defaultToAny(1, 2, 3)).toBe(1);
    })
	
    test('Input (null, 1, 2) should cause output 1', () => {
      expect(defaultToAny(null, 1, 2)).toBe(1);
    })

    test('Input (undefined, null, 2) should cause output 2', () => {
      expect(defaultToAny(undefined, null, 2)).toBe(2);
    })

    test('Input (undefined, null, NaN) should cause output NaN', () => {
      expect(defaultToAny(undefined, null, NaN)).toBe(NaN);
    })
})

describe('Test DefaultToAny Positive', () => {
    test('Input null should cause output undefined', () => {
      expect(defaultToAny(null)).toBe(undefined);
    })
})