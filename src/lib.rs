use deno_bindgen::deno_bindgen;

#[no_mangle]
pub extern "C" fn add(a: isize, b: isize) -> isize {
    a + b
}

#[no_mangle]
pub extern "C" fn print_buffer(ptr: *const u8, len: usize) {
    let buf = unsafe { std::slice::from_raw_parts(ptr, len) };
    println!("{:?}", buf);
}

#[deno_bindgen]
pub struct Input {
    a: i32,
    b: i32,
    c: String,
}

#[deno_bindgen]
fn sum(input: Input) -> i32 {
    println!("{}", input.c);
    input.a + input.b
}

#[cfg(test)]
mod tests {
    use super::add;

    #[test]
    fn it_works() {
        assert_eq!(4, add(2, 2));
    }
}
