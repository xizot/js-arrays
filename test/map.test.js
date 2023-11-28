const { persons, numbers, words } = require('../src/data.js')
const { squaredNumbers,
  capitalizedWords,
  personsAgeIncreased,
  multipliedByIndex } = require('../src/map.js');

test('squaredNumbers', () => {
  const expectedResults = [1, 4, 9, 16, 25];
  expect(squaredNumbers(numbers)).toEqual(expectedResults);
});

test('capitalizedWords', () => {
  const expectedResults = ["APPLE", "BANANA", "CHERRY"];
  expect(capitalizedWords(words)).toEqual(expectedResults);
});


test('personsAgeIncreased', () => {
  const expectedResults = [
    { name: 'Peter', age: 17, address: 'Malang', member: true },
    { name: 'Mark', age: 19, address: 'Malang', member: false },
    { name: 'John', age: 28, address: 'Surabaya', member: true },
    { name: 'Jane', age: 15, address: 'Surabaya', member: false },
    { name: 'Tony', age: 25, address: 'Malang', member: true },
  ];
  expect(personsAgeIncreased(persons)).toEqual(expectedResults);
});


test('multipliedByIndex', () => {
  const expectedResults = [0, 2, 6, 12, 20];
  expect(multipliedByIndex(numbers)).toEqual(expectedResults);
});
