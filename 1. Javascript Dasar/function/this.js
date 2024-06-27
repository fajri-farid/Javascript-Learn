// ini bukan arrow function, arrow function "this"-nya beda lagi!
const person = {
  name: "fajri",
  sayhello: function (name) {
    // name parameter disini itu beda dengan name yang diluarnya
    console.log(`this`);
  },
};

person.sayhello("fajri");
