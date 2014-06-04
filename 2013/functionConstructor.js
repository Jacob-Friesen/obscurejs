#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Dynamic function parameter names using eval :(

var args = 'a, b, c, doOperation',
func;

eval(' func = function(' + args + '){' + 
    'return (doOperation) ? a + (b * c) : -1;' +
'}');

console.log(func(1, 2, 3, true));// 7
console.log(func(1, 2, 3, false));// -1

// Using the Function constructor

var func = new Function('a', 'b', 'c', 'doOperation', 
                        'return (doOperation) ? a + (b * c) : -1;');

console.log(func(1, 2, 3, true));// 7
console.log(func(1, 2, 3, false));// -1

// A cleaner implementation

var args = ['a', 'b', 'c', 'doOperation'];
var body = function(){
    return (doOperation) ? a + (b * c) : -1;
}
var func = new Function(args, 'return (' + body.toString() + ')()');

console.log(func(1, 2, 3, true));// 7
console.log(func(1, 2, 3, false));// -1