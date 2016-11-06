// This is Kinda special because I do want this to be instanciated  [SagiN]
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["multiply", "add", "divide", "pow"] }] */

class Calculator {

  static add(...args) {
    let sum = 0;

    Object.keys(args).forEach((key) => {
      if (args[key]) {
        sum += args[key];
      }
    });

    return sum;
  }

  multiply(...args) {
    let sum = 0;

    Object.keys(args).forEach((key) => {
      if (args[key]) {
        sum *= args[key];
      }
    });

    return sum;
  }

  static subtract(...args) {
    let sum = 0;

    Object.keys(args).forEach((key) => {
      if (args[key]) {
        sum -= args[key];
      }
    });

    return sum;
  }

  static divide(...args) {
    let sum = 0;

    Object.keys(args).forEach((key) => {
      if (args[key]) {
        sum /= args[key];
      }
    });

    return sum;
  }

  static pow(...args) {
    let sum = 1;

    Object.keys(args).forEach((key) => {
      if (args[key]) {
        sum = sum ** args[key];
      }
    });

    return sum;
  }
}

function cube(x) {
  return x * x * x;
}
const foo = Math.PI + Math.SQRT2;

export default Calculator;

export { cube, foo };
