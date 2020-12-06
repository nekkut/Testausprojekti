import keys from '../src/keys';

function Foo() {
  this.a = 1
  this.b = 2
}

describe('Test Keys Positive', () => {
  test('Basic use', () => {
    expect(keys(new Foo)).toMatchObject(['a', 'b'])
  })
})


describe('Test Keys Negative',() => {
  test('null key', () => {
    expect(keys(null)).toMatchObject([])
  })
  
  test('undefined key', () => {
    expect(keys(undefined)).toMatchObject([])
  })
})