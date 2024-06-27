// function kan biasanya ada nama disini kita buat tanpa nama
// dengan cara kita masukkan function tanpa nama kedalam variabel
// jadi pemanggilannya cukup dengan nama variabel saja
let say = function (name) {
  console.log(`hello ${name}`);
};

say("fajri");

// bisa juga anynomous function didalam parameter
function giveMeName(callback) {
  callback("fajri"); // ==> function kosong dengan parameter fajri
}

giveMeName(function (name) {
  console.log(`Hello ${name}`);
});
