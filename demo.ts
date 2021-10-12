import {add, add2, printBuffer} from "./mod.ts";

console.log(add(35, 34));
console.log(add2(35, 34));

const buffer = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);
printBuffer(buffer);
