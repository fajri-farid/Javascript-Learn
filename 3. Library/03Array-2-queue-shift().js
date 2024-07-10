const queue = []; // antrian dia itu fifo "first in first out"

queue.push("muh.");
queue.push("fajri");
queue.push("farid");

// get all
// console.info(queue);

// shift disini pasti ambil yang pertama gitu
// setelah diambil dia akan menghapus yang telah dia ambil tadi
// untuk melihatnya bisa di coba untuk di run code ini
console.log("shift() mulai:");
console.info(queue); // masih 3 isinya

console.info(queue.shift()); // ambil paling awal dan dihapus
console.info(queue); // sisa 2

console.info(queue.shift()); // ambil paling awal dan dihapus
console.info(queue); // sisa 1

console.info(queue.shift()); // ambil paling awal dan dihapus
console.info(queue); // sisa 0
