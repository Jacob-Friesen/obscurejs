#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Boolean to integer casting

console.log(+true);// 1
console.log(Number(true));// also 1
console.log(+false);// 0
console.log(Number(false));// also 0

// Turning that into arrays

console.log(+[]);// 0
console.log(!+[]);// true
console.log(+!+[]);// 1

// Combining it all

console.log(+!+[]+!+[]);// 2
console.log(+!+[]+!+[]+!+[]);// 3
console.log((+!+[]+!+[])*(+!+[]+!+[]));// 4
console.log((+!+[]+!+[])/(+!+[]+!+[]));// 1
