const { persons } = require("./data");

const squaredNumbers = (numbers) => {
  // Code here: return square of numbers
  // Example: return numbers.map(number => number * number);
  return numbers.map(number => number * number)
};

const multipliedByIndex = (numbers) => {
  /* Code here: Given an array of numbers, 
  use the map function to create a new array where each element is the original number multiplied by its index.*/
    return numbers.map((number,index) => number*index);
}

const capitalizedWords = (words) => {
  // Code here: return capitalized words
  return words.map(work => work.toUpperCase())
}

const personsAgeIncreased = (persons) => {
  /* Code here: Given an array of objects representing people with name and age properties, 
  use the map function to create a new array where each person's age is increased by 1. */
  return result1 = persons.map(person => {
    person.age += 1;
    return person;
  });
}


module.exports = {
  squaredNumbers,
  capitalizedWords,
  personsAgeIncreased,
  multipliedByIndex
}