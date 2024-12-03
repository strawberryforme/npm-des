import {foo,t1} from './t1.mjs'; // (iii)
export function bar() {
    if (Math.random()) {
        foo(); // (iv)
        console.log(t1)
    }
}

export const t2 = 't2';
console.log(t1)