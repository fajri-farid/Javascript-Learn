// array search

const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

console.info(source.find((value) => value > 3));
/* 
  metode find akan mengembalikan elemen pertama dalam array yang memenuhi kondisi yang diberikan 
  dalam fungsi callback
*/

console.info(source.findIndex((value) => value > 3));
// klw ini dia akan cari angka index mana yang pertama memenuhi
// output indexnya bukan angkanya!

console.info(source.includes(7));
// mengecek apakah angka 7 itu ada atau tidak

console.info(source.indexOf(5));
// mencari indeks pertama dari nilai 5 dalam array source

console.info(source.lastIndexOf(5));
// mencari indeks terakhir dari nilai 5 dalam array source

// cara mudah commend banyak itu dengan "shitf + alt + a"
