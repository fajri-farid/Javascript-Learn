const person = {};
// set itu kita tambahkan
Reflect.set(person, "firstName", "Eko");
Reflect.set(person, "lastName", "Eko");

console.info(person);

// has itu mengecek dia punya atau tidak (true/false)
console.info(Reflect.has(person, "firstName")); // true
console.info(Reflect.has(person, "middleName")); // false

// get itu ambil nilai/value
console.info(Reflect.get(person, "firstName"));
console.info(Reflect.get(person, "lastName"));
