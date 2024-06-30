let str = "Hello, world!";

// substring
/* 
    - misal index pertama yang diberikan negatif maka itu terhitung 0
    - Jika "startIndex" lebih besar dari "endIndex", substring akan menukar nilai mereka.
      kek (5,0) maka akan jadi (0,5)
*/
console.log("ini substring:");
console.log(str.substring(-2, 5)); // (0,5)
console.log(str.substring(5, 0));

console.log("");
// slice
/* 
    - angka negatif itu menghitung dari belakang
    - Tidak ditukar jika "startIndex" lebih besar dari "endIndex".
*/
console.log("ini slice:");
console.log(str.slice(0, 5));
console.log(str.slice(5, 0)); // tidak dibalik jadi (0,5), jadi akan kosong
console.log(str.slice(-1)); // tanda seru (kan paling belakang tuh)
console.log(str.slice(-5, -1));
