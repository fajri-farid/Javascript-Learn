const url = "https://www.example.com/halaman saya.html";
const encodedUrl = encodeURI(url);
console.log(encodedUrl);
// Output: https://www.example.com/halaman%20saya.html
// Sekarang, URL sudah aman untuk dikirim karena spasi telah diubah menjadi %20, yang merupakan
// representasi URL-encoded dari spasi.

const query = "a=b";
const encodedQuery = encodeURIComponent(query);
console.log(encodedQuery);
// Output: a%3Db
// Sekarang, parameter URL sudah aman untuk dikirim karena tanda sama dengan telah diubah menjadi %3D
