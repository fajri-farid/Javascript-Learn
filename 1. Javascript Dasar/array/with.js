// versi jadul

const person = {
  firstName: "Muhammad",
  midName: "Fajri",
  lastName: "Farid",
};

console.log(person.firstName);
console.log(person.midName);
console.log(person.lastName);

console.log("");
// versi with
console.log("pakai with:");
with (person) {
  console.log(firstName);
  console.log(midName);
  console.log(lastName);
}

// tapi ini tidak disarankan karena ada ke ambiguaan
// contoh:
console.log("");

const person1 = {
  firstName: "Eko",
  middleName: "Kurniawan",
  lastName: "Khannedy",
};

// ubah isi dari first dan last
const firstName = "Budi";
const lastName = "Nugraha";

with (person1) {
  console.log(firstName); // Output: Eko, maunya budi
  console.log(middleName);
  console.log(lastName); // Output: Khannedy, maunya nugraha
}

console.log(person1.firstName);
