import isBuffer from '../src/isBuffer';

describe('Test IsBuffer', () => {
  test('Input new Buffer object should be buffer', () => {
    expect(isBuffer(new Buffer.alloc(2))).toBe(true)
  })
})