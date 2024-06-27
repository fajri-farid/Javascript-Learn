// di js ES6 kita bisa buat hanya dengan class {}
// sebelumnya kan kita pake function

class Person {
  constructor(name) {
    // belum ada property-nya
    console.log(`hello ${name}`);
  }
}

const fajri = new Person("fajri");

console.log(fajri);
