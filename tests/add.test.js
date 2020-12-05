import add from '../src/add';

describe('Test Add', () => {
  test('Adding 6 and 4 should be 10', () => {
    expect(add(6,4)).toBe(10);
  })
})