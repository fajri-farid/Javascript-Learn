// rest parameter hanya ada satu.
// jadi tidak bisa name juga berupa rest parameter
function sum(name, ...data) {
  // ...data ini berartikan bahwa dia itu datanya lebih dari satu
  let total = 0;
  // cara singkat mirip dengan i=0;i<data.length;i++
  for (const item of data) {
    total += item;
  }
  console.info(`Total ${name} is ${total}`);
}

sum("Orange", 2, 3, 4, 6, 7, 8);
// jadi ini parameter datanya akan dimasukkan ke dalam array:
// [2,3,4,6,7,8]

sum("Apple", 5, 5, 6, 7, 5, 6);
sum("Banana", 9, 5, 2, 3, 4);
sum("Grape", 9);

// misal kita sudah ada data berupa array nya gimana dong?

sum("Avocado", ...[1, 2, 3]);

// misal dia sudah ada di variabelnya
const values = [10, 20, 30];
sum("pear", ...values);
