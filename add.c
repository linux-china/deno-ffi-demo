int add(int a, int b) {
    return a + b;
}

// callback function
void store_function(void (*callback)(int)) {
    callback(1);
}
