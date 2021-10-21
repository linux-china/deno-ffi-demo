// add.ts
import * as bindings from "./bindings/bindings.ts";

export function add(a: number, b: number): number {
    return bindings.sum({
        a,
        b,
        c: "sum"
    }) as number;
}

export function sayHello(name: string) {
    return bindings.say_hello(name);
}
