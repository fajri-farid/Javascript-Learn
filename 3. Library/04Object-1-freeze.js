const Person = {
  firstName: "fajri",
  lastName: "farid",
};

Object.freeze(Person); // gunanya agar object "Person" tikak bisa diubah-ubah

Person.firstName = "hello"; // meng-edit firstName
delete Person.lastName; // menghapus lastName

console.log(Person); // tidak akan berubah apa-apa
// const person1 = new Person();
