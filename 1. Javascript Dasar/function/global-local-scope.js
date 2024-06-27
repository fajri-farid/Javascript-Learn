let counter = 0;

function hitMe() {
  counter++;
}

console.log(counter); // output: 0

// pembelajaran baru ternyata function itu bisa tidak kita panggil
// tetapi misal kita panggil jangan di comment, karena akan eror

hitMe();
console.log(counter); // output: 1, karena counter sudah jalan sekali dan nilai counter jadi 0+1= 1

hitMe();
hitMe();
hitMe();
console.log(counter); // output: 4, karena kita panggil 3 kali jadi 3+1=4
