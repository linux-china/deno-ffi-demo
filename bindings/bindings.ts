// Auto-generated with deno_bindgen
import { CachePolicy, prepare } from "https://deno.land/x/plug@0.4.1/plug.ts"
function encode(v: string | Uint8Array): Uint8Array {
  if (typeof v !== "string") return v
  return new TextEncoder().encode(v)
}
const opts = {
  name: "deno_ffi",
  url: (new URL("../target/release", import.meta.url)).toString(),
  policy: undefined,
}
const _lib = await prepare(opts, {
  say_hello: {
    parameters: ["buffer", "usize"],
    result: "void",
    nonblocking: false,
  },
  sum: { parameters: ["buffer", "usize"], result: "i32", nonblocking: false },
})
export type Input = {
  a: number
  b: number
  c: string
}
export function say_hello(a0: string) {
  const a0_buf = encode(a0)
  return _lib.symbols.say_hello(a0_buf, a0_buf.byteLength) as null
}
export function sum(a0: Input) {
  const a0_buf = encode(JSON.stringify(a0))
  return _lib.symbols.sum(a0_buf, a0_buf.byteLength) as number
}
