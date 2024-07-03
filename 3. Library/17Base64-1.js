const nama = "fajri farid";

const encoded = btoa(nama);
console.log(encoded); // di encode ke base64

const decoded = atob(encoded);
console.log(decoded); // di translate dari base64 ke bentuk asli
