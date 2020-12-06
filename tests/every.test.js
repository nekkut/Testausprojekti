import every from '../src/every';

describe('Test Every Positive', () => {

    test('Output should be true', () => {
      expect(every([true, 1])).toBe(true);
    })

    test('Output should be false', () => {
      expect(every([true, false])).toBe(false);
    })
	
})