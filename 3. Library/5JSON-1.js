const Person = {
  firstName: "fajri",
  lastName: "farid",
  address: {
    country: "indonesia",
    city: "makassar",
  },
};

const json = JSON.stringify(Person);
const object = JSON.parse(json);

console.log(json);
console.log(object);


