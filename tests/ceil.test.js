import ceil from '../src/ceil';

describe('Test Ceil Positive', () => {

    test('4.123 should convert to 5', () => {
      expect(ceil(4.123)).toBe(5);
    })

    test('Input (4.123, 2) should cause output to 4.13', () => {
      expect(ceil(4.123, 2)).toBe(4.13);
    })

    test('Input (4123, -2) should cause output to 4200', () => {
      expect(ceil(4123, -2)).toBe(4200);
    })
	
    test('Input (0) should cause output to 0', () => {
      expect(ceil(0)).toBe(0);
    })

    test('Input (5, -1) should cause output to 10', () => {
      expect(ceil(5, -2)).toBe(10);
    })
})

describe('Test Ceil Negative', () => {

    test('null as parameter should return NaN', () => {
      expect(ceil(null)).toBe(NaN);
    })

    test('NaN as parameter should return NaN', () => {
      expect(ceil(NaN)).toBe(NaN);
    })

    test('null as second parameter should work as if it was 0', () => {
      expect(ceil(4.123, null)).toBe(5);
    })
	
	test('NaN as second parameter should work as if it was 0 ', () => {
      expect(ceil(4.123,NaN)).toBe(5);
    })
    test('undefined as second parameter should work as if it was 0 ', () => {
      expect(ceil(4.123,undefined)).toBe(5);
    })


})