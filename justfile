#!/usr/bin/env just --justfile

build: c-build
  deno run -A https://deno.land/x/deno_bindgen@0.8.1/cli.ts --release

run:
  deno run -A --unstable demo.ts

callback:
  deno run -A --unstable callback-demo.ts

c-build:
  cc -c -o add.o add.c
  mkdir -p target
  cc -shared -Wl -o target/lib_add.dylib add.o
  rm -rf add.o
