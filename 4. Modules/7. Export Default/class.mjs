export default class {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    console.info(`Hello ${name}, my name is ${this.name}`);
  }
}
