#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var a, b, c;

(function() {
    var a = b = c = 1;
})();

console.log(a, b, c);// undefined 1 1

// Is equivalent to:

(function() {
    var a = (b = (c = 2));
})();

console.log(a, b, c);// undefined 2 2

// Can be fixed by predeclaring the variables:

(function() {
    var a, b, c;
    a = b = c = 3;
})();

console.log(a, b, c);// undefined 2 2

// Or by manually assigning the variables:

(function() {
    var a = 3, b = a, c = b;
})();

console.log(a, b, c);// undefined 2 2

// Which is equivalent to:

(function() {
    var a = 3;
    var b = a; 
    var c = b;
})();

console.log(a, b, c);// undefined 2 2
