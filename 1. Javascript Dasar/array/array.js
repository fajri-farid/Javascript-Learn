let nama = ["fajri", "farid"];

for (i = 0; i < 2; i++) {
  console.log(nama[i]);
}

console.log(nama.length);

nama.length = nama.length - 1; // klw nama saja disini dia akan eror karena dia akan memasukkan angka "1" karena
// "2 - 1 = 1" dan itu dia bertabrakan dengan isi yang sekarang
// fajri dan farid sehingga undefined
// nah pada code diatas ini dia akan menghapus 1 isi dari array itu

console.log(nama.length);

for (let i = 0; i < nama.length; i++) {
  console.log(nama[i]);
}

for (let i = 0; i < 2; i++) {
  console.log(nama[i]);
}
// let hello[2] = ["fajri", "farid"]
// di C bisa tapi di JS tidak

let hello = ["hi", "hello"];

hello[1] = "hai";

hello.forEach((hello) => {
  console.log(hello);
});
