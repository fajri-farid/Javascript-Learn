function Person() {
  // penanda dia itu object nama functionya pake huruf besar!
  this.firstName = "";
  this.lastName = "";
  this.sayHello = function (name) {
    console.info(`hello ${this.firstName} ${this.lastName}`);
  };
}

const eko = new Person();
const fajri = new Person();

// memasukkan nilai atau value dari properti!
eko.firstName = "eko";
eko.lastName = "khanedy";
eko.sayHello("eko");

console.log(eko);
console.log(fajri);
