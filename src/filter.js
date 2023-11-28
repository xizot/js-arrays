const data = require('./data.js')
const persons = data.persons;

const personsHasAgeGreaterThanParams = (age) => {
  // Code here: return persons with age greater than parameter
  // Example: return persons.filter(person => person.age > age);
  return persons.filter(person => person.age > age)
}
const personsHasAddressEqualParams = (address) => {
  // Code here: return persons with address equal to parameter
  return persons.filter(person => person.address === address)
}

const getNames = (age, address) => {
  // Code here: return name of persons with address equal to parameter
  const filterData = persons.filter(person => person.address === address && person.age === age)
  const nameOfFiltered = filterData.map(person => person.name)
  return nameOfFiltered
}

const personsWhoIsMember = () => {
  // Code here: return persons who is member
  const filterMember = persons.filter(person => person.member)
  return filterMember
}

module.exports = {
  personsHasAgeGreaterThanParams,
  personsHasAddressEqualParams,
  getNames,
  personsWhoIsMember
};