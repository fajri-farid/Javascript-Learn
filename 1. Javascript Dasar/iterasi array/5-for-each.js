const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});

// SYNTAX atau CARA PAKAI:
// array.forEach(function(currentValue, index, array) {
//     Lakukan sesuatu dengan currentValue
//   });

// KET:
// currentValue: Nilai saat ini dari elemen array yang sedang diproses.
// index (opsional): Indeks dari elemen saat ini yang sedang diproses.
// array (opsional): Array yang sedang diiterasi.


// ----

// Kelebihan dan Kelemahan forEach()
// Kelebihan:

// Sederhana dan Mudah Digunakan: forEach() memberikan cara yang mudah untuk melakukan iterasi pada setiap 
// elemen array tanpa perlu mengkhawatirkan indeks atau mengubah nilai array.
// Menghentikan Iterasi: Anda bisa menggunakan return di dalam callback untuk menghentikan iterasi lebih awal, 
// jika diperlukan.
// Kelemahan:

// Tidak Mengembalikan Nilai: forEach() tidak mengembalikan nilai apa pun (return undefined), sehingga tidak dapat 
// digunakan untuk membangun array baru seperti map() atau melakukan operasi lain yang membutuhkan nilai balik.
// Kapan Harus Menggunakan forEach()
// Anda harus menggunakan forEach() ketika Anda hanya perlu melakukan iterasi sederhana pada setiap elemen array dan 
// tidak perlu mengubah atau membangun array baru. Ini cocok digunakan untuk:

// Menjalankan fungsi pada setiap elemen array.
// Melakukan operasi yang tidak memerlukan nilai balik dari iterasi.
// Ketika Anda memerlukan kejelasan dan kemudahan dalam melakukan iterasi.
// Namun, jika Anda perlu membangun array baru dengan nilai-nilai yang diubah atau melakukan transformasi, map() 
// mungkin lebih cocok untuk digunakan.