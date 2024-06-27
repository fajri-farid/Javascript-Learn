function outer() {
  function inner() {
    console.log("hi");
  }

  inner();
}

// inner(); // akan eror disini karena scope function didalam function itu hanya didalam function induknya
outer(); // terus akan eror juga klw kita tidak panggil functionnya.
