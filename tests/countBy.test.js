import countBy from '../src/countBy';

const array = [
  { 'user': 'barney', 'active': true },
  { 'user': 'betty', 'active': true },
  { 'user': 'fred', 'active': false }
]

describe('Test CountBy Positive', () => {
  test('Test two true and one false', () => {
    expect(countBy(array, value => value.active)).toMatchObject({ 'true': 2, 'false': 1 })
  })
})