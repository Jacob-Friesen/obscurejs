#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// numbers

// Doesn't work because 4 is a number primitive and so has no properties.
// console.log(4.toString());// error

// The grouping operator transforms 4 into an Object.
console.log((4).toString());

// null/undefined

// console.log((undefined).toString());// error
// console.log((null).toString());// error

// booleans

console.log(true.toString());// true
console.log(false.toString());// false

// strings

console.log('test'.length);// 4
