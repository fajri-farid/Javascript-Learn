const value = Number(12345);

console.info(value.toString(2)); // ubah ke boolean
console.info(value.toString(8)); // octal

// intinya ini yang diatas yg dalam "()" itu basis angkanya
// (2) berarti dia itu ada 2 0 dan 1 basisnya
// (8) berarti dia 0-7 basisnya

console.info(value.toLocaleString("id-ID")); // pakai indonesia (titik)
console.info(value.toLocaleString("en-US")); // pakai amerika serikat (koma)

// link negara:
// https://community.lansweeper.com/t5/customizing-the-web-console/list-of-currency-culture-codes/ta-p/64431

// yang dalam kurung itu format mana yang mau kita pakai
