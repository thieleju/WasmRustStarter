import init, { mandelbrot } from "../pkg/wasm.js";

async function run() {
  await init();

  const result2 = mandelbrot("Hey");

  document.getElementById("output").textContent = result2;
}

run();
