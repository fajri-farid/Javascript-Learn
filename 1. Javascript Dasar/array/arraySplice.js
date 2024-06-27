let nama = [
  "messi",
  "suaraez",
  "ronaldo",
  "neymar",
  "mbappe",
  "ferran",
  "joselu",
  "benzema",
  "callender",
  "pedri",
  "gavi",
  "lamine yamal",
];

console.log(nama.length);
nama.splice(4, 1);
console.log(nama.length);

nama.push("fajri"); // fajri akan masuk ke array terbaru di belakang
console.log(nama.length);
console.log(nama[11]);

// for (i = 0; i < nama.length; i++) {
//   console.log(nama[i]);
// }
