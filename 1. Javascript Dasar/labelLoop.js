function isPrime(num) {
  if (num <= 1) {
    console.log("bukan prima");
    return false;
  }

  outerLoop: for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        continue outerLoop;
      }
    }
    if (num % i === 0) {
      console.log("bukan prima");
      return false;
    }
  }

  console.log("adalah prima");
  return true;
}

isPrime(12);
