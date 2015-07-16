#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var yearsFrom = function(start, distance) {
    return [start - 1].concat(new Array(distance)).map(function(current, index, arr) {
        return arr[index + 1] = current + 1;
    });
};

console.log(yearsFrom(2015, 7));
// [ 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022 ]
console.log(yearsFrom(1990, 3));
// [ 1990, 1991, 1992, 1993 ]


var fib = function(n) {
    return [0, 1].concat(new Array(n - 1)).map(function(current, index, arr) {
        arr[index + 2] = current + arr[index + 1];
        return current;
    });
};

// console.log(fib(0));
console.log(fib(1));// [ 0, 1 ]
console.log(fib(2));// [ 0, 1, 1 ]
console.log(fib(3));// [ 0, 1, 1, 2 ]
console.log(fib(4));// [ 0, 1, 1, 2, 3 ]
console.log(fib(5));// [ 0, 1, 1, 2, 3, 5 ]
console.log(fib(17));
// [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597 ]
