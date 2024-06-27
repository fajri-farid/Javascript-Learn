const person = {
  firstName: "fajri",
  lastName: "farid",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  address: {
    street: "ki hajar dewantoro",
    city: "majene",
    country: "indonesia",
  },
  hobby: "game",
  channer: "fajri farid",
};

// cara mudah panggilnya:
let { firstName, lastName, fullName } = person;
console.log(firstName);
console.log(lastName);
console.log(fullName);

// klw mau ambil semua juga bisa
// bisa dengan satu-satu kek tadi, bisa juga "...others" yang mana ini akan return berupa object
// mari kita coba

let { hobby, ...others } = person;
console.log(others); // keluarin semua data kecuali hobby!

// kan ada nested di object person tadi
// gimana cara mudah aksesnya?

// cara lama
console.log(person.address.city);

// cara mudah
let {
  address: { city, address, country },
} = person;

console.log(city);

// tapi address sudah tidak bisa di akses, yang bisa itu didalam addressnya.
console.log(address); // akan undefined
