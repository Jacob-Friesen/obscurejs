#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var flatMap = function(array, callback) {
  return [].concat.apply([], array.map(callback));
};

// This will not work, it produces [ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] ] (See the blog post for why)
// var flatMap = function(array, callback) {
//   return [].concat(array.map(callback));
// };

var result = flatMap([1, 2, 3], function(element) {
  return [element, element];
});
console.log(result);// [1, 1, 2, 2, 3, 3]

// Useful example
console.log('\nMap and Remove:');

var result = flatMap(['test1', 'other', 'test2', 'test3'], function(element) {
  if (element.indexOf('test') > -1) {
    return element[0].toUpperCase() + element.substring(1);
  }
  return [];
});
console.log(result);// ['Test1', 'Test2', 'Test3']

// Extra tests
console.log('\nExtra tests:');

console.log(flatMap([1, 2, 3], function(element) {
  return element;
}));// [1,2,3]

console.log(flatMap([], function(element) {
  return [element, [element, element]];
}));// []

console.log(flatMap([1, 2, 3], function(element) {
  return [element, [element, element]];
}));// [1, [1, 1], 2, [2, 2], 3, [3, 3]]
