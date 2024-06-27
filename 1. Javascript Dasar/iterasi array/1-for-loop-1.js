const angka = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
  console.log(angka[i]);
}

// tidak enaknya ini itu kita harus tahu didalam array-nya itu ada berapa
// sehingga ada solusiny dengan pakai .length untuk tahu arraynya ada berapa
// contohnya ada di berikutnya

// Kelebihan:
// 1. Sangat fleksibel dan dapat digunakan untuk mengakses setiap elemen dalam array.
// 2. Cocok digunakan jika Anda perlu mengakses indeks elemen array secara eksplisit.

// Kelemahan:
// 1. Lebih mudah terjadi kesalahan seperti off-by-one error (kesalahan satu indeks).
// 2. Memerlukan penulisan kode yang lebih banyak dibandingkan dengan metode modern.

// Kapan Harus Digunakan:
// Digunakan ketika Anda perlu mengakses indeks elemen array atau melakukan iterasi 
// dengan kontrol yang sangat spesifik.