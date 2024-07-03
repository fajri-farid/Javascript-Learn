// materi:
// https://docs.google.com/presentation/d/1qaqOnHQLyeIBBc1wEG49XRtAwp1vSMsKn66-cOR9ML8/edit#slide=id.gb9271b049a_0_269

// Membuat variabel `nama` yang berisi string "eko kurniawan eko khannedy"
const nama = "eko kurniawan eko khannedy";

// Membuat objek RegExp dengan pola /eko/ untuk mencari kemunculan kata "eko"
const regex = /eko/;

// Melakukan pencarian pertama kata "eko" dalam string `nama`
let result = regex.exec(nama);

// Menampilkan hasil pencarian pertama.
// Jika ditemukan, akan menghasilkan array dengan informasi tentang kecocokan.
// Jika tidak ditemukan, akan menghasilkan null.
console.info(result);

// Menguji apakah pola "eko" ada dalam string `nama`
let test = regex.test(nama);

// Menampilkan hasil pengujian.
// Jika ditemukan, akan menghasilkan true.
// Jika tidak ditemukan, akan menghasilkan false.
console.info(test);
