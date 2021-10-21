// Auto-generated with deno_bindgen
import {Plug} from "https://deno.land/x/plug@0.4.0/mod.ts"

function encode(v: string | Uint8Array): Uint8Array {
    if (typeof v !== "string") return v
    return new TextEncoder().encode(v)
}

const opts = {
    name: "deno_ffi",
    url: "target/debug",
}
const _lib = await Plug.prepare(opts, {
    sum: {parameters: ["buffer", "usize"], result: "i32", nonblocking: false},
    say_hello: {
        parameters: ["buffer", "usize"],
        result: "void",
        nonblocking: false,
    },
})
export type Input = {
    a: number
    b: number
    c: string
}

export function sum(a0: Input) {
    const a0_buf = encode(JSON.stringify(a0))
    return _lib.symbols.sum(a0_buf, a0_buf.byteLength) as number
}

export function say_hello(a0: string) {
    const a0_buf = encode(a0)
    return _lib.symbols.say_hello(a0_buf, a0_buf.byteLength) as null
}
