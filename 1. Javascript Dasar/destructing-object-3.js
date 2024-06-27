const name = [];

const [firstName, middleName, lastName] = name; // ini pake "[]" atau "{}" tergantung dari yang kita tuju
// disini karena name array maka pake "[]"

console.log(firstName); // akan undefined
console.log("---");

const name1 = ["fajri"];

const [firstName1, middleName1, lastName1 = "end"] = name1; // kita taruh nilai default dari "lastName1"
console.log(firstName1); // isinya "fajri"
console.log(middleName1); // isinya undefined
console.log(lastName1); // isinya sesuai default "end"

console.log("---");

const name2 = ["fajri", "", "farid"];

const [firstName2, middleName2, lastName2 = "end"] = name1; // kita taruh nilai default dari "lastName1"
console.log(firstName2); // isinya "fajri"
console.log(middleName2); // isinya undefined
console.log(lastName2); // isinya "farid", default akan jalan ketika isinya kosong, disini ada isinya
