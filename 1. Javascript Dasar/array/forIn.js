console.log("versi object");
// ... in ...
// ... pertama itu nama sembarang
// ... kedua itu ambil dari mana
const person = {
  firstName: "Eko", //property disini itu yang nama nya kek firstName dan sejajarnya
  middleName: "Kurniawan",
  lastName: "Khannedy",
};

for (const property in person) {
  console.log(`Property ${property}: ${person[property]}`);
}

console.log("versi array");

const names = ["Eko", "Kurniawan", "Khannedy"];

// ... in ...
// ... pertama itu nama sembarang
// ... kedua itu ambil dari mana
for (const index in names) {
  console.log(`Index ${index}: ${names[index]}`);
}
