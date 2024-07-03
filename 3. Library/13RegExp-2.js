const teks = "Saya belajar JavaScript di Petani Kode.";
const pola = /JavaScript/; // Membuat objek RegExp untuk mencari kata "JavaScript"

if (pola.test(teks)) {
  // Menggunakan method `test` untuk mengecek apakah pola ada dalam teks
  console.log("Kata 'JavaScript' ditemukan!");
} else {
  console.log("Kata 'JavaScript' tidak ditemukan.");
}

let result = pola.exec(teks);
console.info(result);
// nanti keluarin kek array gitu munculin:
// yang dicari
// ditemukan di index ke-
// inputan atau teks klw disini
// groups ntah apa

// jadi "exec" dan "test" itu beda
// "exec" akan output yang result tadi. klw tidak ditemukan akan "null"
// "test" itu berupa boolean aja
