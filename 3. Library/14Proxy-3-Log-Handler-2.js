const target = {};

const handler = {
  get: function (target, property) {
    console.info(`Mengakses properti ${property}`);
    return target[property];
  },
  set: function (target, property, value) {
    if (property in target) {
      // Cek apakah properti sudah ada
      console.info(
        `Mengubah properti ${property} dari ${target[property]} menjadi ${value}`
      );

      // Validasi (contoh): value harus berupa string
      if (typeof value !== "string") {
        throw new TypeError(`Properti ${property} harus berupa string`);
      }
    } else {
      console.info(`Membuat properti baru ${property} dengan nilai ${value}`);
    }

    target[property] = value; // Tetapkan nilai baru atau buat properti baru
  },
};

const proxy = new Proxy(target, handler);
proxy.firstName = "Fajri"; // Membuat properti baru
proxy.lastName = "Farid"; // Membuat properti baru
proxy.lastName = "Fauzan"; // Mengubah properti
proxy.age = 25; // Membuat properti baru

console.log(proxy);

try {
  proxy.age = "dua puluh lima"; // Mencoba mengubah properti dengan nilai yang tidak valid (bukan angka)
} catch (error) {
  console.error(error.message); // Tangkap error dan tampilkan pesannya
}

console.info(proxy.firstName);
console.info(proxy.lastName);
console.info(proxy.age);
