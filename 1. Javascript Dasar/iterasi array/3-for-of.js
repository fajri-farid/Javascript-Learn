const angka = [1, 2, 3, 4, 5];

for (const number of angka) {
  console.log(number);
}

// bisa juga pake for of
// bedanya disini itu tidak perlu ada lagi [i]

// Kelebihan:
// 1. Lebih mudah ditulis dan dibaca dibandingkan dengan for loop konvensional.
// 2. Tidak perlu khawatir tentang indeks atau off-by-one error.

// Kelemahan:
// 1. Tidak memberikan akses langsung ke indeks elemen, jika dibutuhkan.

// Kapan Harus Digunakan:
// Ideal untuk melakukan iterasi sederhana di mana Anda tidak memerlukan kontrol atas indeks 
// atau ketika Anda ingin kode yang lebih bersih dan lebih mudah dibaca.