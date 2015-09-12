#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Without trying to handle floating point numbers
console.log('Not attempting to compensate for floating point numbers');

var add = function(x, y) {
    return x + y;
};

console.log('1.0 + 2.0 =', add(1.0, 2.0));// 3
console.log('0.1 + 0.2 =', add(0.1, 0.2));// 0.30000000000000004
console.log('0.01 + 0.06 =', add(0.01, 0.06));// 0.06999999999999999
console.log('0.001 + 0.006 =', add(0.001, 0.006));// 0.007
console.log('0.0001 + 0.0006 =', add(0.0001, 0.0005));// 0.0006000000000000001

// Handling floating point numbers
console.log('Compensating for floating point numbers');

var add = function(x, y) {
    var APPROX = 10000;
    return ((x * APPROX) + (y * APPROX))/APPROX;
};

console.log('1.0 + 2.0 =', add(1.0, 2.0));// 3
console.log('0.1 + 0.2 =', add(0.1, 0.2));// 0.03
console.log('0.01 + 0.06 =', add(0.01, 0.06));// 0.07
console.log('0.001 + 0.006 =', add(0.001, 0.006));// 0.007
console.log('0.0001 + 0.0006 =', add(0.0001, 0.0005));// 0.0006
