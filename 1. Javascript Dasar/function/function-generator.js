// pake tanda "*" setelah kata "function"
function* createNames() {
  yield "Eko"; // pake yield diawal sebelum nilainya
  yield "Kurniawan";
  yield "Khannedy";
}

const names = createNames();
for (const name of names) {
  console.log(name);
}
