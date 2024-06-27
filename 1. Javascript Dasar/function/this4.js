const person = {
  name: "kinamoto",
  sayhello: function (name) {
    console.log(`hello ${name}, my name is ${this.name}`);

    // solusinya ini, jadi ini bisa dipake di-nested keberapapun.
    // tinggal pake "say.name" saja!
    let say = this;

    function nestedFunction() {
      console.log(`nested function: ${say.name}`);
    }

    nestedFunction();
  },
};

person.sayhello("fajri");
