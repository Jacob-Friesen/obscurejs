#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Via an array

function test(){
    return [1, 2, 3];
}

results = test();
console.log(results[0], results[1], results[2]);

// Giving it meaning

results = test();
var a = results[0],
    b = results[1],
    c = results[2];

console.log(a, b, c);

// By an object literal

function test2(){
    return {
        a: 1,
        b: 2,
        c: 3
    }
}

results = test2();
console.log(results.a, results.b, results.c);

// The best way; An assigns function

function test(){
    return [1, 2, 3];
}

assign(test(), function(a, b, c){
    console.log(a, b, c);
});

function assign(result, callback){
    callback.apply(this, result);
}
