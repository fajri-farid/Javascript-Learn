const kalimat = "Saya suka makan apel merah dan apel hijau.";

const regexApel = /apel/g; // Mencari semua kata "apel" secara global

// match(regex)
const hasilMatch = kalimat.match(regexApel);
console.log(hasilMatch); // Output: ['apel', 'apel']

// search(regex)
const indeksApelPertama = kalimat.search(regexApel);
console.log(indeksApelPertama); // Output: 14 (index pertama kali "apel" muncul)

// replace(regex, value)
const kalimatBaru = kalimat.replace(regexApel, "jeruk");
console.log(kalimatBaru); // Output: "Saya suka makan jeruk merah dan apel hijau."

// replaceAll(regex, value)
const kalimatBaruSemua = kalimat.replaceAll(regexApel, "jeruk");
console.log(kalimatBaruSemua); // Output: "Saya suka makan jeruk merah dan jeruk hijau."

// split(regex)
const kataKata = kalimat.split(/ /); // Memisahkan kalimat menjadi kata-kata berdasarkan spasi
console.log(kataKata); // Output: ['Saya', 'suka', 'makan', 'apel', 'merah', 'dan', 'apel', 'hijau.']