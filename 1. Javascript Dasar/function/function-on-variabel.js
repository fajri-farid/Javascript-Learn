function hello(name) {
  console.log(`hello ${name}`);
}

// masukkan function "hello" ke dalam variabel
const hi = hello;
// jadi panggil function skrang bisa dengan dua cara:
// 1. pakai function biasa:
hello("fajri");
// 2. pakai variabel yang telah kita masukkan function didalamnya
hi("fajri");
