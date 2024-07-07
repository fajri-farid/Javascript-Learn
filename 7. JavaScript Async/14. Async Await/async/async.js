// Mengembalikan Promise<string>
// tidak pake async
function getNamePromise() {
  return new Promise(function (resolve, reject) {
    resolve("Eko");
  });
}

// Mengembalikan Promise<string>
// klw async cukup gini!
async function getNameAsync() {
  return "Eko";
}
