function cariAngka(array, target) {
  for (const element of array) {
    if (element === target) {
      console.log("ada");
      return; // Keluar dari fungsi jika ditemukan
    }
  }
  console.log("tidak ada"); // Dicetak jika loop selesai tanpa menemukan target
}

cariAngka([1, 2, 3, 4, 5], 4);
