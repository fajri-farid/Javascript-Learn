{
  const array = ["muh.", "fajri", "farid"];

  array.forEach(function (value, index) {
    console.info(`${index} : ${value}`);
  });
  console.log("");
  // versi lebih singkat:
  array.forEach((value, index) => console.info(`${index} : ${value}`));

  // misal cuman mau value aja
  console.log("");
  array.forEach((value) => console.info(value));

  // pake map untuk iterasi array
  console.log(array.map((arr) => arr));
}
