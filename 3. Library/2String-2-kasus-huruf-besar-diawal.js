// cara buat agar setiap huruf pertama dalam satu kata itu huruf besar dan setelahnya huruf kecil
const nama = "muh. fajri FARID";

// fungsi pengubah
function kapitalHurufAwal(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

const namaCapitalized = kapitalHurufAwal(nama);

console.info(namaCapitalized);
