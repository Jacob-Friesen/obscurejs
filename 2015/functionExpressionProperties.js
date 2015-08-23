#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Previous strategy

var memoize = function(callback) {
    var results = {};

    return function(n) {
        if (results[n] !== undefined){
            return results[n];
        }

        results[n] = callback(n);
        return results[n];
    };
};

// Now the biggest number should compute much faster

var fib = memoize(function(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
});

console.log(fib(0));// 0
console.log(fib(1));// 1
console.log(fib(2));// 1
console.log(fib(17));// 1597
console.log(fib(40));// 102334155
console.log(fib(60));// 1548008755920

// Using function expression properties
console.log();
console.log('New strategy (results are the same)');

var memoize = function(callback) {
    return function compute(n) {
        return compute[n] || (compute[n] = callback(n));
    };
};

var fib2 = memoize(function(n) {
    if (n < 2) {
        return n;
    }

    return fib2(n - 1) + fib2(n - 2);
});

console.log(fib2(0));// 0
console.log(fib2(1));// 1
console.log(fib2(2));// 1
console.log(fib2(17));// 1597
console.log(fib2(40));// 102334155
console.log(fib2(60));// 1548008755920
