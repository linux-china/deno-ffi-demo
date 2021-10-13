// Auto-generated with deno_bindgen

const encode = (s: string) => new TextEncoder().encode(s);
const _lib = Deno.dlopen("target/debug/libdeno_ffi.dylib", { sum: { parameters: [ "buffer", "usize" ], result: "i32" } });
type Input = { a: number; b: number; c: any };
export function sum(a0: Input) {
  const a0_buf = encode(JSON.stringify(a0));
  return _lib.symbols.sum(a0_buf, a0_buf.byteLength) as number
}
 