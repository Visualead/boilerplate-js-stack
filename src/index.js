import Calculator from "./math.js"
import { foo, cube } from "./math.js"

async function logA() {
    for(let i = 0; i<100; i++) {
        await console.log(`A-${i}`);
    }
}

async function logB() {
    for(let i = 0; i<100; i++) {
        await console.log(`B-${i}`);
    }
}

logA();
logB();

let calc = new Calculator();
console.log(calc.add(1,2,3,4,5,6));

console.log(cube(100));

console.log(foo);