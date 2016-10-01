#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var isEven = function(n) {
  return n % 2 == 0;
};

console.log('Even:');
console.log([1, 2, 3, 4, 5, 6].filter(isEven));
// [ 2, 4, 6 ]
 
console.log('\nWithout negate:');
console.log([1, 2, 3, 4, 5, 6].filter(function(value) {
  return !isEven(value);
}));
// [ 1, 3, 5 ]

console.log('\nWith negate:');

var negate = function(callback) {
  return function() {
    return !callback.apply(this, arguments);
  };
};

var isOdd = negate(isEven);
console.log([1, 2, 3, 4, 5, 6].filter(isOdd));
// [ 1, 3, 5 ]
