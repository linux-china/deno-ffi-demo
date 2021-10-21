build: c-build
  cargo build

run:
  deno run -A --unstable demo.ts

c-build:
  cc -c -o add.o add.c
  cc -shared -Wl -o target/lib_add.dylib add.o
  rm -rf add.o
