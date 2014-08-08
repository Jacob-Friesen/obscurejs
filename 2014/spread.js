#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Spread via Traceur (https://github.com/google/traceur-compiler/wiki/LanguageFeatures#spread)
// function add(x, y) {
//     return x + y;
// }
// 
// var numbers = [4, 38];
// console.log(add(...numbers));// 42

function add(x, y) {
    return x + y;
}

var numbers = [4, 38];
console.log(add.apply(null, numbers));// 42