function ptr(v: any): bigint {
    return Deno.UnsafePointer.of(v);
}

type i32 = number;

const dylib = Deno.dlopen("./target/lib_add.dylib", {
    "store_function": {
        parameters: ["function"],
        result: "void",
    },
});

// callback function
function queueCallback(id: i32) {
    console.log(`callback ${id}`)
}

const queueCallbackResource = new Deno.UnsafeCallback({
    parameters: ["i32"],
    result: "void",
}, queueCallback);

dylib.symbols.store_function(ptr(queueCallbackResource));
// After done
dylib.close();
queueCallbackResource.close();

