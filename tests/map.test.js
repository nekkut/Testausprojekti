import map from '../src/map';

function square(n) {
  return n * n
}

describe('Test Map Positive', () => {
  test('Array [2, 6] should map with square function to [4, 36]', () => {
    expect(map([2, 6], square)).toMatchObject([4, 36])
  })
})

describe('Test Map Negative', () => {
  test('null with square should map with []', () => {
    expect(map([null, square], square)).toMatchObject([])
  })
  
  test('undefined with square should map with []', () => {
    expect(map([undefined, square], square)).toMatchObject([])
  })
})