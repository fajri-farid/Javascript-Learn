const person = {
  name: "kinamoto",
  sayhello: function (name) {
    console.log(`hello ${name}, my name is ${this.name}`);

    hello: "fajri"; // ini tidak bisa karena hello ini bukan object, tidak valid!

    function nestedFunction() {
      console.log(`nested function: ${this.hello}`);
    }

    nestedFunction();
  },
};

person.sayhello("fajri");

// ini bukan arrow function, arrow function "this"-nya beda lagi!
