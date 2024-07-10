function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.log(`hi ${name}, my name is ${firstName}`);
  };
}

function Manager(firstName, lastName) {
  Employee.call(this, firstName); // nge-copy apa yang dilakukan oleh constructor lain (oop lain)
  // firstName disini itu => parameter dari Employee
  this.lastName = lastName;
}

const fajri = new Manager("fajri", "farid");
console.log(fajri);

// outputnya gini:
// Manager {
//     firstName: 'fajri',
//     sayHello: [Function (anonymous)],
//     lastName: 'farid'
//   }

// firstName dan sayHello berasal dari "Employee" yang di call tadi
