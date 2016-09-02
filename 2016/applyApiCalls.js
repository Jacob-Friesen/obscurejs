#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('Usual apply example:');

var wrapper = function() {
  original.apply(this, arguments);
};

var original = function(arg1, arg2) {
  console.log('args in', arg1, arg2);
};

wrapper('test1', 'test2');
// args in test1 test2

console.log('\nOne line flatten:');

var arr = [
  [1,2,3],
  [4,5]
];
console.log([].concat.apply([], arr));
// [ 1, 2, 3, 4, 5 ]

console.log('\nOne line array fill');

console.log(Array.apply(null, Array(3)).map(String.prototype.valueOf, 'test'));
// [ 'test', 'test', 'test' ]

console.log('\nOne line multiple function call')

var test = function() {
    console.log('message 1');
};
 
Array.apply(null, Array(10)).forEach(test);
// message 1
// message 1
// ...
// message 1
