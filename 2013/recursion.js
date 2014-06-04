#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var yCombinator = function(F) {
    return (function(x) {
        return F(function(y) { 
            return (x(x))(y);
        });
    })(function(x) {
        return F(function (y) {
            return (x(x))(y);
        });
    });
};

var fib = function(fibGenerated) {
    return function(n) {
        if (n < 2)
            return n;
        return fibGenerated(n - 1) + fibGenerated(n - 2);
    };
};

console.log(yCombinator(fib)(0));// 0
console.log(yCombinator(fib)(1));// 1
console.log(yCombinator(fib)(17));// 1597