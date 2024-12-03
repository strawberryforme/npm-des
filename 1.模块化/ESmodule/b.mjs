// import {a} from './a.mjs';

// export const print = () => {
//   console.log(a);
// };
import {foo} from 'a'; // (iii)
export function bar() {
    if (Math.random()) {
        foo(); // (iv)
    }
}