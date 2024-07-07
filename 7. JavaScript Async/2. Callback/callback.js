function sapaSetelahTigaDetik(nama, callback) {
  setTimeout(function () {
    console.log("Halo, " + nama + "!");
    callback(); // Panggil fungsi callback setelah 3 detik
    // apa yang dia panggil?
    // tergantung parameter yang kita kirimkan ke fungsi ini
    // pada kasus ini kita mengirimkan "function ucapkanSelamatTinggal()"
  }, 3000);
}

function ucapkanSelamatTinggal() {
  console.log("Sampai jumpa lagi!");
}

sapaSetelahTigaDetik("Alice", ucapkanSelamatTinggal);
// jadi nunggu 3 detik dulu
// keluar console log halo
// terus dijalankan function selamat tinggal
