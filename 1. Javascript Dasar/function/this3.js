const person = {
  name: "kinamoto",
  sayhello: function (name) {
    console.log(`hello ${name}, my name is ${this.name}`);

    function nestedFunction() {
      console.log(`nested function: ${this.name}`); // "this.name" akan undefined, solusinya di "this4.js"
    }

    nestedFunction();
  },
};

person.sayhello("fajri");
