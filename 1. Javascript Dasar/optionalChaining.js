let person = {};

// console.log(person.address.country); //eror

// cara agar tidak eror adalah kita melakukan pengecekan dia itu ada atau tidak sebenarnya

console.log(person?.address?.country); // akan undefined karena tidak ada
