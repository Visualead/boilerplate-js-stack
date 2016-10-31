class Calculator {

    add(...args) {
        let sum = 0;
        for(let i in args) {
            sum += args[i];
        }

        return sum;
    }

    multiply(...args) {
        let sum = 0;
        for(let i in args) {
            sum *= args[i];
        }

        return sum;
    }

    subtract(...args) {
        let sum = 0;
        for(let i in args) {
            sum -= args[i];
        }

        return sum;
    }

    divide(...args) {
        let sum = 0;
        for(let i in args) {
            sum /= args[i];
        }

        return sum;
    }

    pow(...args) {
        let sum = 1;
        for(let i in args) {
            sum = sum ** args[i];
        }

        return sum;
    }
}

function cube(x) {
    return x * x * x;
}
const foo = Math.PI + Math.SQRT2;

export default Calculator;

export { cube, foo };