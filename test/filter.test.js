const { personsHasAgeGreaterThanParams, personsHasAddressEqualParams, getNames, personsWhoIsMember } = require('../src/filter');
const { persons } = require('../src/data');

test('Return persons with age greater than 12', () => {
  const AGE_FILTER = 12
  const expectedResults = [
    {
      "name": "Peter",
      "age": 16,
      "address": "Malang",
      "member": true
    },
    {
      "name": "Mark",
      "age": 18,
      "address": "Malang",
      "member": false
    },
    {
      "name": "John",
      "age": 27,
      "address": "Surabaya",
      "member": true
    },
    {
      "name": "Jane",
      "age": 14,
      "address": "Surabaya",
      "member": false
    },
    {
      "name": "Tony",
      "age": 24,
      "address": "Malang",
      "member": true
    }
  ]
  expect(personsHasAgeGreaterThanParams(AGE_FILTER)).toEqual(expectedResults);
});

test('Return persons with age less than 100', () => {
  const AGE_FILTER = 100
  const expectedResults = []
  expect(personsHasAgeGreaterThanParams(AGE_FILTER)).toEqual(expectedResults);
});

test('Return persons with address equal Malang', () => {
  const ADDRESS_FILTER = 'Malang'
  const expectedResults = [
    {
        "name": "Peter",
        "age": 16,
        "address": "Malang",
        "member": true
    },
    {
        "name": "Mark",
        "age": 18,
        "address": "Malang",
        "member": false
    },
    {
        "name": "Tony",
        "age": 24,
        "address": "Malang",
        "member": true
    }
]
  expect(personsHasAddressEqualParams(ADDRESS_FILTER)).toEqual(expectedResults);
});

test('Return persons with address don\'t have in persons', () => {
  const ADDRESS_FILTER = 'Malang_notfound'
  const expectedResults = []
  expect(personsHasAddressEqualParams(ADDRESS_FILTER)).toEqual(expectedResults);
});

test('Return name of persons with address Surabaya and age 14', () => {
  const AGE_FILTER = 14
  const ADDRESS_FILTER = 'Surabaya'
  const expectedResults = ["Jane"]
  expect(getNames(AGE_FILTER, ADDRESS_FILTER)).toEqual(expectedResults);
});

test('Return persons who is member', () => {
  const expectedResults = [
    {
      "name": "Peter",
      "age": 16,
      "address": "Malang",
      "member": true
    },
    {
      "name": "John",
      "age": 27,
      "address": "Surabaya",
      "member": true
    },
    {
      "name": "Tony",
      "age": 24,
      "address": "Malang",
      "member": true
    }
  ]
  expect(personsWhoIsMember()).toEqual(expectedResults);
});
