const person = {
  firstName: "Eko",
  lastName: "Khannedy",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const array = value.split(" ");
    this.firstName = array[0];
    this.lastName = array[1];
  },
};

console.log(person.fullName);
