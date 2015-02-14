#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// http://en.wikipedia.org/wiki/Fibonacci_number

// Fibonacci numbers quickly become difficult to compute, so they are a good candidate for memoization:

var fib = function(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
};

console.log(fib(0));// 0
console.log(fib(1));// 1
console.log(fib(2));// 1
console.log(fib(17));// 1597
console.log('This should take a few seconds on most machines:');
console.log(fib(40));// 102334155

// The memoization. For simplicity, I am only going to asume one argument is being used:

var memoize = function(callback) {
    var results = {};

    return function(n) {
        if (results[n] !== undefined){
            return results[n]
        }

        results[n] = callback(n);
        return results[n];
    };
};

// Now the biggest number should compute much faster

var fastFib = memoize(function(n) {
    if (n < 2) {
        return n;
    }

    return fastFib(n - 1) + fastFib(n - 2);
});

console.log(fastFib(0));// 0
console.log(fastFib(1));// 1
console.log(fastFib(2));// 1
console.log(fastFib(17));// 1597
console.log('This should be near instant on most machines:');
console.log(fastFib(40));// 102334155
console.log(fastFib(60));// 1548008755920
