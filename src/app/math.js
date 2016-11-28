// This is Kinda special because I want to use instances of calculator + nice example of eslint exceptions  [SagiN]
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["multiply", "add", "divide", "pow","subtract"] }] */

class Calculator {
  timesCalled: number;

  constructor() {
    this.timesCalled = 0;
  }

  add(...args: Array<number>) {
    this.timesCalled += 1;
    return args.reduce((total, val) => total + val, 0);
  }

  multiply(...args: Array<number>) {
    this.timesCalled += 1;
    return args.reduce((total, val) => total * val, 1);
  }

  subtract(...args: Array<number>) {
    this.timesCalled += 1;
    return args.reduce((total, val) => total - val, 0);
  }

  divide(...args: Array<number>) {
    this.timesCalled += 1;
    return args.reduce((total, val) => total / val, 1);
  }

  pow(...args: Array<number>) {
    this.timesCalled += 1;
    return args.reduce((total, val) => {
      if (total === 0) {
        return val;
      }
      return total ** val;
    }, 0);
  }
}

function cube(x: number) {
  return x * x * x;
}

const foo = Math.PI + Math.SQRT2;

export default Calculator;

export { cube, foo };
