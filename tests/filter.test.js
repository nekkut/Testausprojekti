import filter from '../src/filter';

const animals = [
{'animal': 'dog', 'mammal': true},
{'animal': 'snake', 'mammal': false}
]

describe('Test Filter', () => {
  test('From snake and dog only dog is mammal', () => {
    expect(filter(animals, ({ mammal }) => mammal)).toMatchObject([{'animal': 'dog', 'mammal': true}]);
  })
})