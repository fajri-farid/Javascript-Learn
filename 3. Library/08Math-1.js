// link referensi:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

const angka = Math.random(); // "M" pada "Math" itu kapital
// "Math.randon()" ini juga harus diketahui outputnya itu rentang "0-1"

console.log(angka);

console.info(Math.max(1, 2, 3, 4, 5, 10, 19, 4, 23));
console.info(Math.min(1, 2, 3, 4, 5, 10, 19, 4, 23));
console.info(Math.round(10.5)); // sesuai aturan mtk >= 0.5 itu dia dibulatkan keatas
console.info(Math.round(10.4)); // sesuai aturan mtk < 0.5 itu dia dibulatkan kebawah
console.info(Math.round(10.49));
console.info(Math.ceil(10.5)); // ceil berarti atap, maka akan selalu dibulatkan keatas
console.info(Math.floor(10.5)); // floor berarti lantai, maka akan selalu dibulatkan kebawah

// yang lain

// akar
console.log(Math.sqrt(4, 2)); // 4 akar 2 (4 yang didalam akar, 2 yang diluar yang jadi bil.)
console.log(Math.sqrt(2)); // otomatis akarnya 2

// pangkat
console.log(Math.pow(2, 1)); // 2 pangkat 1
