// lalu ketika dia var
var j = 20;

for (var j = 0; j < 4; j++) {
  console.log(`Local : ${j}`); // mentok di 3
}

console.info(`Global : ${j}`); // ini dia jadi 4 bukan 20
