const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

const ganjil = source.filter((value) => value % 2 === 1); // ngefilter ketika di modulu sisanya 1
const genap = source.filter((value) => value % 2 === 0); // ngefilter ketika di modulu sisanya 0

console.log(source);
console.log(ganjil);
console.log(genap);
