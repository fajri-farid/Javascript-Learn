function grade(nilai) {
  switch (nilai) {
    case "A":
    case "B":
    case "C":
      return console.log("Kamu lulus");
      break;
    case "D":
    case "E":
      return console.log("Kamu tidak lulus");
      break;
    default:
      return console.log("tidak valid");
  }
}

grade("B");
