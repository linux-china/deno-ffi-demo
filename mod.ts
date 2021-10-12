// Determine library extension based on your OS.
let ext = "";
switch (Deno.build.os) {
    case "windows":
        ext = "dll";
        break;
    case "darwin":
        ext = "dylib";
        break;
    case "linux":
        ext = "so";
        break;
}

const libName = `target/debug/libdeno_ffi.${ext}`;
// Open library and define exported symbols
const dylibRs = Deno.dlopen(libName, {
    add: {
        parameters: ["isize", "isize"],
        result: "isize"
    },
    print_buffer: {
        parameters: ["buffer", "usize"],
        result: "void",
    }
});

// Open library and define exported symbols
const dylibC = Deno.dlopen(`target/lib_add.${ext}`, {
    add: {
        parameters: ["isize", "isize"],
        result: "isize"
    }
});

export function add(a: number, b: number): number {
    return dylibRs.symbols.add(a, b) as number;
}

export function printBuffer(buffer: Uint8Array) {
    dylibRs.symbols.print_buffer(buffer, buffer.length);
}

export function add2(a: number, b: number): number {
    return dylibC.symbols.add(a, b) as number;
}
