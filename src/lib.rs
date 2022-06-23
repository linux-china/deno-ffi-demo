use deno_bindgen::deno_bindgen;

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

// say hello
#[deno_bindgen]
pub fn say_hello(message: &str) {
    println!("Hello {}!", message);
}

#[cfg(test)]
mod tests {
    use super::add;

    #[test]
    fn it_works() {
        assert_eq!(4, add(2, 2));
    }
}
