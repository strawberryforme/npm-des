// import {b} from './b.mjs';

// b();

// export const a = 'a';

import {bar} from 'b'; // (i)
export function foo() {
    bar(); // (ii)
}