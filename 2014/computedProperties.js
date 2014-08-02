#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Default computer property values

var x = 0;
var obj = {};
obj[x] = 'hello';
console.log(obj[x]);// hello

// The JavaScript proposal (needs Traceur to run)
// var x = 0;
// var obj = {
//     [x] : 'hello'
// };
// console.log(obj[0]);// hello

// A somewhat near equivalent:

var toLiteral = function(array) {
    var newLiteral = {}

    array.forEach(function(pair) {
        newLiteral[pair[0]] = pair[1];
    });

    return newLiteral;
}

var obj = toLiteral([
    [x, 'hello']
]);
console.log(obj[x]);// hello
