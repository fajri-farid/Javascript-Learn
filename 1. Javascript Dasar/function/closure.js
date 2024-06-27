function createAdder(value) {
  const owner = "fajri";
  function add(param) {
    console.log(owner);
    return value + param;
  }

  return add;
}

const addTwo = createAdder(2);

console.log(addTwo(10));
