const stack = [];

stack.push("muh.");
stack.push("fajri");
stack.push("farid");

// konsep "stack" beda lagi dengan "queue" yang dia dari depan, "stact" itu dari belakang
// jadi di mulai dari index paling terakhir menuju paling depan
// sebelumnya pake "shift()", sekarang pakai "pop()"

console.log("shift() mulai:");
console.info(stack); // masih 3

console.info(stack.pop()); // ambil index paling belakang
console.info(stack); // sisa 2

console.info(stack.pop()); // ambil index paling belakang
console.info(stack); // sisa 1

console.info(stack.pop()); // ambil index paling belakang
console.info(stack); // sisa 0
