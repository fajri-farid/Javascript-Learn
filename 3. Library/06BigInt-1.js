// sumber belajar more:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

// klw mau buat angka yang melebih "MAX_SAFE_INTEGER" maka gunakan "BigInt"
// nilanya itu = "9.007.199.254.740.991" atau "9 kuadtrilun lebih (9rb triliun)"

const a = BigInt(Number.MAX_SAFE_INTEGER);
const b = BigInt(Number.MAX_SAFE_INTEGER);

const c = a + b;

console.log(c);
console.log(typeof c);

const d = Number.MAX_SAFE_INTEGER;

console.log(d);
// ingat materi buat format anga (buat "." dan ",")
console.info(d.toLocaleString("id-ID"));
