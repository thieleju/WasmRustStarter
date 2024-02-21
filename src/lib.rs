use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn mandelbrot(name: &str) -> String {
    let mut x: i32 = 0;

    for i in 0..1000 {
        x += i;
    }
    println!("Hello, {}!", name);

    format!("{}, I counted to {}!", name, x)
}
