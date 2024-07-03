const person = {
  nama: "John Doe",
  usia: 30,
};

const validator = {
  get: function (target, property) {
    if (property === "usia" && target[property] < 18) {
      return "Usia dirahasiakan";
    }
    return target[property];
  },
  set: function (target, property, value) {
    if (property === "usia") {
      if (typeof value !== "number" || value < 0) {
        throw new TypeError("Usia harus berupa angka positif");
      }
    }
    target[property] = value;
  },
};

const personProxy = new Proxy(person, validator);

console.log(personProxy.nama); // Output: "John Doe"
console.log(personProxy.usia);

personProxy.usia = 17; // edit property yg sudah ada
console.log(personProxy.usia); // Output: "Usia dirahasiakan" (karena usia < 18)

personProxy.usia = 25; // Mengubah usia menjadi 25
console.log(personProxy.usia); // Output: 25

// ini akan eror klw di run atau di console browser pada baris ini
// personProxy.usia = -20;
// console.log(personProxy.usia);
