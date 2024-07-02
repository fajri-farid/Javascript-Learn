// menggabungkan nilai object A ke object B

const target = { firstName: "fajri" };
const source = { lastName: "farid" };

Object.assign(target, source); // maknanya ini itu source kita masukkan/gabungkan ke target
// jadi yang pertama disebut itu ya yang terperbarui

console.log(target);
console.log(source);

console.log("ini target" + target); // akan [object Object]
console.log("ini target: " + JSON.stringify(target)); // kita terjemahkan ke string agar bisa kebaca
// dengan benar

const target1 = { firstName: "fajri" };
const source1 = { firstName: "hello", lastName: "farid" };
// ini kan ada sama atributnya
// atau propertinya maka yang kita masukkan yang akan menjadi nilai sekarang

Object.assign(target1, source1);
// kek ini source masuk ke target. Maka nilai firstName akan jadi "hello" bukan "fajri" lagi
console.log(target1);
