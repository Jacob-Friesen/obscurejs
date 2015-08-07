#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The full function (From the comments for http://stackoverflow.com/a/8084248)

var random = (Math.random() + 1);
var code = random.toString(36).substr(2, 5);
console.log(code);// e.g. jf614

// Decomposing each step
console.log('Decomposing each step:')

console.log('Random number >1     :', random); // e.g. 0.7283050254918635
console.log('To base 36           :', random.toString(36));// e.g. 0.4uzargxocs4te29
console.log('Select 5 after period:', random.toString(36).substr(2,5));// e.g. jf614
