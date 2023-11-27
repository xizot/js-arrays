const data = require('./data.js')
const persons = data.persons;

const personsHasAgeGreaterThanParams = (age) => {
  // Code here: return persons with age greater than parameter
  // Example: return persons.filter(person => person.age > age);
}
const personsHasAddressEqualParams = (address) => {
  // Code here: return persons with address equal to parameter
}

const getNames = (age, address) => {
  // Code here: return name of persons with address equal to parameter
}

const personsWhoIsMember = () => {
  // Code here: return persons who is member
}

module.exports = {
  personsHasAgeGreaterThanParams,
  personsHasAddressEqualParams,
  getNames,
  personsWhoIsMember
};