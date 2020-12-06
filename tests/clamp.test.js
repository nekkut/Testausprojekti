import clamp from '../src/clamp';

describe('Test Clamp Positive', () => {
    test('Clamping -10 to lower bound -5 and upper bound 5 should get -5', () => {
      expect(clamp(-10, -5, 5)).toBe(-5);
    })

    test('Clamping 10 to lower bound -5 and upper bound 5 should get 5', () => {
      expect(clamp(10, -5, 5)).toBe(5);
    })
})


describe('Test Clamp Negative', () => {

    test('null input should produce output NaN', () => {
      expect(clamp(null)).toBe(NaN);
    })

    test('Clamping to same lower and upper bound', () => {
      expect(clamp(10, -5, -5)).toBe(-5);
    })
	
	test('Clamping to lower bound value being higher than upper bound', () => {
      expect(clamp(10, 15, -5)).toBe(10);
    })
	
	test('null as lower bound balue should produce output NaN', () => {
      expect(clamp(10, null, 5)).toBe(NaN);
    })
	
	test('null as upper bound balue should produce output NaN', () => {
      expect(clamp(10, -5, null)).toBe(NaN);
    })	
	
	test('undefined as a bound balue should produce output NaN', () => {
      expect(clamp(10, -5, undefined)).toBe(NaN);
    })	
})