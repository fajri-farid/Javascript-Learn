const regex = /ek[aiueo]/gi;
// huruf belakang nya itu a/i/u/e/o
// jadi kita atur gitu disini!
const text = "eko ado eki eka ejo emi elo eke";

while ((result = regex.exec(text)) !== null) {
  console.info(result);
}

const regex2 = /[a-zA-z]ar/gi;

const text2 = "muh. fajri farid";
while ((result2 = regex2.exec(text2)) !== null) {
  console.info(result2);
}
