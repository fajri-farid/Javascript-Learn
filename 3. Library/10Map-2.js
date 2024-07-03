const buah = new Map();
buah.set("apel", 5);
buah.set("jeruk", 3);
buah.set("mangga", 2);

// mengeluarkan total elemen dari variabel buah
console.log("jadi total buah ada", buah.size); // Output: 3 (ada 3 elemen dalam Map)

// mengahapus buah
buah.clear();
console.log("sekarang menjadi: ", buah.size); // Output: 0 (semua elemen dihapus)

buah.delete("apel");
console.log(buah.has("apel")); // Output: false (elemen "apel" sudah dihapus)

// mengecek value dari mangga
buah.set("mangga", 2);
console.log(buah.get("mangga")); // Output: 2

// tambah elemen jeruk
buah.set("jeruk", 3);
// mengecek apakah jeruk ada didalam variabel buah
console.log(buah.has("jeruk")); // Output: true (elemen "jeruk" ada)
