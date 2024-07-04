// Named exports
export const PI = 3.14159;
export function add(x, y) {
  return x + y;
}
export class Calculator {
  multiply(x, y) {
    return x * y;
  }
}

// Default export
const defaultFunction = () => {
  console.log("Default export function");
};
export default defaultFunction;
