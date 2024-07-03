// Menyimpan nama-nama dalam variabel konstanta
const nama = "eko kurniawan\neko khannedy\nEdi Kurniawan";
// Membuat pola regex untuk mencari 'eko' (global dan case-sensitive)
const regex1 = /eko/g;
// Membuat pola regex untuk mencari 'Kurniawan' (global dan case-insensitive)
const regex2 = /Kurniawan/gi;

let result;

// Mencari semua kemunculan 'eko' dalam 'nama'
while ((result = regex1.exec(nama)) !== null) {
  console.info(result);
}

// Mencari semua kemunculan 'Kurniawan' (tanpa peduli besar kecil huruf) dalam 'nama'
while ((result = regex2.exec(nama)) !== null) {
  console.info(result);
}
