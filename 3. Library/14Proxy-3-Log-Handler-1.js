const target = {};

const handler = {
  get: function (target, property) {
    console.info(`Access property ${property}`);
    return target[property];
  },
  set: function (target, property, value) {
    console.info(`Change property ${property} : ${value}`);
    if (value == null) {
      target[property] = "";
    } else {
      target[property] = value;
    }
  },
};

const proxy = new Proxy(target, handler);
proxy.firstName = "fajri";
proxy.lastName = "farid";

console.log(proxy);

console.info(proxy.firstName);
console.info(proxy.lastName);
