typedef void (*fire_number)(int);

int add(int a, int b) {
    return a + b;
}

// callback function
void store_function(fire_number callback) {
    callback(1);
}
