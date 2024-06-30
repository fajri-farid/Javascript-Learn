const nama = "Muh. Fajri Farid";

console.info(nama.length); // total karakter, spasi kehitung
console.info(nama.toLowerCase()); // jadikan semua huruf kecil
console.info(nama.toUpperCase()); // jadikan semua huruf besar
console.info(nama.split(" ")); // jadi kita pisah-pisah isi dari string menjadi beberapa index
// parameter pembedanya itu tanda "spasi", jadi ketika ada spasi baru maka dimasukkan ke index baru juga

console.info(nama.charAt(1)); // Mengambil nilai huruf ke-2 (array dari 0 btw)

const input = "   input   ";
console.info(input.trim()); // hapus spasi kiri dan kanan, jangan lupa tanda "()"
console.info(input.trimEnd()); // hapus belakang saja
console.info(input.trimStart()); // hapus depan saja

let str = "Hello, world!";

console.log(str.includes("world")); // apakah ada didalam str (1 ada, 0 tidak)
console.log(str.indexOf("world") + 1); // kapan kata "world" pertama kali muncul
// jika ada maka pada index berapa dia pertama kali muncul (disini saya + 1 agar munculkan
// dia huruf ke-n pertama kali dia muncul)
// misal tidak ada outputnya 0
console.log(str.indexOf("fajri") + 1); // 0, karena tidak ada fajri disitu
console.log(str.substring(0, 5)); //Mengambil bagian dari string antara indeks.
// disini dia dari index 0 ke 5
console.log(str.slice(0, 5));


