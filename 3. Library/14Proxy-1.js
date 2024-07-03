// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

const target = {};

const handler = {
  get: function (target, property) {
    // mendapatkan
    return target[property];
  },
  set: function (target, property, value) {
    // ngedit atau memberikan nilai
    target[property] = value;
  },
};

const proxy = new Proxy(target, handler);
// untuk memberikan nilai object maka kita ke proxy dulu bukan ke nama variabel objectnya
// Objek proxy ini bertindak sebagai perantara (proxy) untuk objek target.
proxy.firstName = "fajri"; // menambahkan property baru
proxy.lastName = "farid";

console.log(proxy);

console.info(proxy.firstName);
console.info(proxy.lastName);

/* 
Proxy memungkinkan Anda untuk menambahkan lapisan kontrol tambahan pada objek JavaScript. 
Anda dapat menggunakan proxy untuk melakukan validasi input, logging, atau bahkan mengubah perilaku 
objek secara dinamis
*/
