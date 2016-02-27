#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var library = {
  aFunction: function() {
    console.log('Calling a library function');
  }
};

console.log(library.aFunction + '');
// Same as console.log(library.aFunction.toString());
// function () {
//   console.log('Calling a libary function');
// }

console.log('test'.toLowerCase + '');
// function toLowerCase() { [native code] }

// Function regeneration:
console.log('\nRegenerating the function with return instead:');

console.log('Before:');
library.aFunction();
// Calling a library function

var newFunctionality = library.aFunction.toString().replace('console.log', 'return');
newFunctionality = 'return (' + newFunctionality + ')();';
library.aFunction = new Function(newFunctionality);

console.log('After:');
console.log(library.aFunction());
// Calling a library function
