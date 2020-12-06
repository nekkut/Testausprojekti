import isBuffer from '../src/isBuffer';

describe('Test IsBuffer Positive', () => {
  test('Input new Buffer object should be buffer', () => {
    expect(isBuffer(new Buffer.alloc(2))).toBe(true)
  })
})

describe('Test IsBuffer', () => {
  test('Input new Int should not be buffer', () => {
    expect(isBuffer(1)).toBe(false)
  })
  
  test('Input null should not be buffer', () => {
    expect(isBuffer(null)).toBe(false)
  })
  
  test('Input undefined should not be buffer', () => {
    expect(isBuffer(undefined)).toBe(false)
  })
})