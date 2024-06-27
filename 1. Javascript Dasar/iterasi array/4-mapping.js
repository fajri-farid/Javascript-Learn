// ini itu beda sih, dia cocok untuk perubahan dan pemanggilan object begitu

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

// Menggunakan map() untuk membuat array baru berisi nama dari setiap user
const names = users.map((user) => user.name); // jadi ini dipanggil name nya, klw mau id tinggal ganti id saja

console.log(names); // Output: ["Alice", "Bob", "Charlie"]

// Kapan menggunakan map()?

// Anda bisa menggunakan map() ketika Anda ingin:
// 1. Transformasi nilai: Mengubah nilai dari setiap elemen array berdasarkan fungsi yang diberikan.
// 2. Seleksi atau pemfilteran: Membuat array baru yang hanya berisi subset atau properti tertentu
//    dari elemen array asli.
// 3. Membuat struktur data baru: Membuat array baru dengan struktur yang mirip atau sama dengan array
//    asli, tetapi dengan transformasi atau manipulasi tertentu.

// Namun, jika Anda hanya perlu melakukan iterasi sederhana untuk melakukan sesuatu dengan setiap
// elemen array tanpa membuat array baru, mungkin forEach() atau for...of loop lebih cocok.
