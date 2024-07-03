const string = "eko ado eki eka ejo emi elo eke";

console.info(string.match(/ek[aiueo]/gi)); // ["eko", "eki", "eka", "eke"]

console.info(string.search(/ek[aiueo]/gi)); // 0 (index ke-0)

// di replace semua karena regex, replace tidak mengganggu nilai asli dari string
// jadi dia dibuatkan sendiri nilainya

console.info(string.replace(/ek[aiueo]/gi, "keren")); // keren ado keren keren ejo emi elo keren
// yang diatas itu banyak keren keren nya karena kita pakai "g" atau global klw mau satu aja
// dihapus aja "g" nya

console.info(string.replace(/ek[aiueo]/i, "keren"));

console.info(string.replaceAll(/ek[aiueo]/gi, "keren")); // keren ado keren keren ejo emi elo keren
// wajib pake "g", global.

console.info(string.split(/e/gi)); // ["", "ko ado", "ki", "ka ", "jo ", "mi", "lo", "k", ""]
