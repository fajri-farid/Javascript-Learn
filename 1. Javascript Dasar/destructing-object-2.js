function displayPerson({ firstName, middleName, lastName }) {
  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
}

function displayPerson2(person) {
  console.info(person.firstName);
  console.info(person.middleName);
  console.info(person.lastName);
}

displayPerson(person);

console.log("-----");

// bisa juga gini

const person = {
  firstName: "Muh.",
  middleName: "Fajri",
  lastName: "Farid",
};

displayPerson(person);

console.log("-----");

// versi biasa
function sum(array) {
  return array[0] + array[1];
}

console.log(sum([1, 2]));

// versi destructuring

function sum2([first, second]) {
  return first + second;
}

console.log(sum2([1, 2]));
