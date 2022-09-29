// Auto-generated with deno_bindgen
import { CachePolicy, prepare } from "https://deno.land/x/plug@0.5.2/plug.ts"

function encode(v: string | Uint8Array): Uint8Array {
  if (typeof v !== "string") return v
  return new TextEncoder().encode(v)
}

function decode(v: Uint8Array): string {
  return new TextDecoder().decode(v)
}

function readPointer(v: any): Uint8Array {
  const ptr = new Deno.UnsafePointerView(v as bigint)
  const lengthBe = new Uint8Array(4)
  const view = new DataView(lengthBe.buffer)
  ptr.copyInto(lengthBe, 0)
  const buf = new Uint8Array(view.getUint32(0))
  ptr.copyInto(buf, 4)
  return buf
}

const url = new URL("../target/release", import.meta.url)
let uri = url.toString()
if (!uri.endsWith("/")) uri += "/"

let darwin: string | { aarch64: string; x86_64: string } = uri
  + "libdeno_ffi.dylib"

if (url.protocol !== "file:") {
  // Assume that remote assets follow naming scheme
  // for each macOS artifact.
  darwin = {
    aarch64: uri + "libdeno_ffi_arm64.dylib",
    x86_64: uri + "libdeno_ffi.dylib",
  }
}

const opts = {
  name: "deno_ffi",
  urls: {
    darwin,
    windows: uri + "deno_ffi.dll",
    linux: uri + "libdeno_ffi.so",
  },
  policy: undefined,
}
const _lib = await prepare(opts, {
  say_hello: {
    parameters: ["pointer", "usize"],
    result: "void",
    nonblocking: false,
  },
  sum: { parameters: ["pointer", "usize"], result: "i32", nonblocking: false },
})
export type Input = {
  a: number
  b: number
  c: string
}
export function say_hello(a0: string) {
  const a0_buf = encode(a0)
  const a0_ptr = Deno.UnsafePointer.of(a0_buf)
  let rawResult = _lib.symbols.say_hello(a0_ptr, a0_buf.byteLength)
  const result = rawResult
  return result
}
export function sum(a0: Input) {
  const a0_buf = encode(JSON.stringify(a0))
  const a0_ptr = Deno.UnsafePointer.of(a0_buf)
  let rawResult = _lib.symbols.sum(a0_ptr, a0_buf.byteLength)
  const result = rawResult
  return result
}
