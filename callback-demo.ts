type i32 = number;

const dylib = Deno.dlopen("./target/lib_add.dylib", {
    "store_function": {
        parameters: ["function"],
        result: "void",
        callback: true,
    },
});

const {symbols: {store_function}} = dylib;

// callback function
function queueCallback(id: i32) {
    console.log(`callback ${id}`)
}

const queueCallbackResource = new Deno.UnsafeCallback({
    parameters: ["i32"],
    result: "void",
}, queueCallback);

store_function(queueCallbackResource.pointer);
// After done
dylib.close();
queueCallbackResource.close();

