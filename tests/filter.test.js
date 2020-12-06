import filter from '../src/filter';

const animals = [
{'animal': 'dog', 'mammal': true},
{'animal': 'snake', 'mammal': false}
]

describe('Test Filter Positive', () => {
  test('From snake and dog only dog is mammal', () => {
    expect(filter(animals, ({ mammal }) => mammal)).toMatchObject([{'animal': 'dog', 'mammal': true}]);
  })
})

describe('Test Filter Negative', () => {
    test('Empty array should produce output []', () => {
      expect(filter(null)).toMatchObject([]);
    })

})