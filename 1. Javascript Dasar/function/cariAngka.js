function cariAngka(array, target) {
  for (const element of array) {
    if (element === target) {
      console.log("ada");
    }
    console.log("tidak ada");
  }
}

cariAngka([1, 2, 3, 4, 5], 4);

// Saat iterasi pertama dengan element 1, "tidak ada" dicetak.
// Saat iterasi kedua dengan element 2, "tidak ada" dicetak.
// Saat iterasi ketiga dengan element 3, "tidak ada" dicetak.
// Saat iterasi keempat dengan element 4, "ada" dan "tidak ada" keduanya dicetak.
// Saat iterasi kelima dengan element 5, "tidak ada" dicetak.

