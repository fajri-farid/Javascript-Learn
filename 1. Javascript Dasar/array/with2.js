const person1 = {
  firstName: "Eko",
  middleName: "Kurniawan",
  lastName: "Khannedy",
};

// ubah isi dari first dan last
person1.firstName = "Budi";
const firstName = "Budi";
const lastName = "Nugraha";

with (person1) {
  console.log(firstName); // Output: Eko, bingung firstname ini dari mana?
  console.log(middleName);
  console.log(lastName); // Output: Khannedy
}

console.log(person1.firstName);
