import {bar,t2} from './t2.mjs'; // (i)
export function foo() {
    bar(); // (ii)
    console.log(t2);
}
export const t1 = 't1';
// console.log(t2);