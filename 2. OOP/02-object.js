// bisa cara isinya dengan kasih parameter di functionnya
function Person(firstName, lastName) {
  // penanda dia itu object nama functionya pake huruf besar!
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`hello ${this.firstName} ${this.lastName}`);
  };
}

const eko = new Person();
const fajri = new Person("fajri", "farid");

eko.firstName = "eko";

console.log(eko);
console.log(fajri);
