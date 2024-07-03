const nama = "eko kurniawan eko khannedy";

// Membuat objek RegExp dengan pola /o/ untuk mencari kemunculan huruf "o"
const regex = /o/; // tinggal pake ini aja klw mau nyari "o"

// Melakukan pencarian pertama huruf "o" dalam string `nama`
const result = regex.exec(nama); // output "o" nya itu yang "o" pertama saja

// Menampilkan hasil pencarian pertama.
// Karena ditemukan, akan menghasilkan array dengan informasi tentang kecocokan.
console.info(result);

// Melakukan pencarian pertama huruf "o" dalam string "tidak ada"
// Karena tidak ditemukan, akan menghasilkan null
console.info(regex.exec("tidak ada"));

// Menguji apakah pola "o" ada dalam variabel `nama`
const test = regex.test(nama);

// Menampilkan hasil pengujian.
// Karena ditemukan, akan menghasilkan true
console.info(test); // Output: true

// Menguji apakah pola "o" ada dalam string "tidak ada"
// Karena tidak ditemukan, akan menghasilkan false
console.info(regex.test("tidak ada")); // Output: false
