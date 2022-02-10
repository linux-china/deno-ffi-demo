#!/usr/bin/env just --justfile

build: c-build
  deno_bindgen --release

run:
  deno run -A --no-check --unstable demo.ts

c-build:
  cc -c -o add.o add.c
  cc -shared -Wl -o target/lib_add.dylib add.o
  rm -rf add.o

setup:
   deno install --reload -Afq -n deno_bindgen https://deno.land/x/deno_bindgen/cli.ts
