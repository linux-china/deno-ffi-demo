Deno FFI Demo
===============

# Buffer arguments

When calling FFI symbols with a buffer, the next argument must be buffer's length

```rust
#[no_mangle]
pub extern "C" fn print_buffer(ptr: *const u8, len: usize) {
    let buf = unsafe { std::slice::from_raw_parts(ptr, len) };
    println!("{:?}", buf);
}
```

# References

* Foreign Function Interface API: https://deno.land/manual@v1.23.0/runtime/ffi_api
* deno_bindgen: simplify glue code generation for Deno FFI libraries written in Rust https://github.com/denoland/deno_bindgen
* AutoPilot Deno: Cross-platform desktop automation module for Deno https://github.com/littledivy/autopilot-deno https://autopilot.mod.land/
