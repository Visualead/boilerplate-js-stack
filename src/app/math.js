// This is Kinda special because I want to use instances of calculator + nice example of eslint exceptions  [SagiN]
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["multiply", "add", "divide", "pow","subtract"] }] */

class Calculator {

  add(...args) {
    let sum = 0;

    Object.keys(args).forEach((key) => {
      if (args[key]) {
        sum += args[key];
      }
    });

    return sum;
  }

  multiply(...args) {
    let sum = 1;

    Object.keys(args).forEach((key) => {
      if (args[key]) {
        sum *= args[key];
      }
    });

    return sum;
  }

  subtract(...args) {
    let sum = 0;

    Object.keys(args).forEach((key) => {
      if (args[key]) {
        sum -= args[key];
      }
    });

    return sum;
  }

  divide(...args) {
    let sum = 0;

    Object.keys(args).forEach((key) => {
      if (args[key]) {
        sum /= args[key];
      }
    });

    return sum;
  }

  pow(...args) {
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
