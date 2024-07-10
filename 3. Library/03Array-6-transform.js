const nama = ["muh.", "fajri", "farid"];

// pakai map untuk buat semua yang didalam array menjadi huruf besar
const nameUpper = nama.map((value) => value.toUpperCase());
console.log(nameUpper);

// kita gabung semua yang didalam array jadi satu
const nameReduce = nama.reduce((before, value) => before + " " + value);
console.log(nameReduce);

// output dia ambil paling belakang ke paling depan
const nameRights = nama.reduceRight((before, value) => before + " " + value);
console.log(nameRights);

// pakai reduce juga buat nge-totalin angka
const angka = [1, 2, 3, 4, 5];
const totalAngka = angka.reduce((before, value) => before + value);
console.log(totalAngka);
