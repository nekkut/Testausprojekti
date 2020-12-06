import slice from '../src/slice';

const Array = [1,2,3,4]

describe('Test Slice Positive', () => {
  test('Slice array from given index to end', () => {
    expect(slice(Array, 2)).toMatchObject([3, 4])
  })

  test('Slice same array what input array is', () => {
    expect(slice(Array, 0)).toMatchObject([1, 2, 3, 4])
  })
})


describe('Test Slice Negative', () => {
  test('Slice null should return []', () => {
    expect(slice(null)).toMatchObject([])
  })

  test('Slice undefined should return []', () => {
    expect(slice(undefined)).toMatchObject([])
  })

  test('Slice from too big index empty array', () => {
    expect(slice(Array, 5)).toMatchObject([])
  })
  
  test('Slice from bad index', () => {
      expect(slice(Array, -2 ,3)).toMatchObject([])
})
})