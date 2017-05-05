#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('Without Array.from:');

const str = 'test';

const strArray = str.split('');
const printArguments = function() {
  console.log([].slice.call(arguments));
};

console.log(strArray);
// [ 't', 'e', 's', 't' ]
printArguments('test1', 'test2', 'test3');
// [ 'test1', 'test2', 'test3' ]

console.log('\nWith Array.from:');

const strArray2 = Array.from(str);
const printArguments2 = function() {
  console.log(Array.from(arguments));
};

console.log(strArray);
// [ 't', 'e', 's', 't' ]
printArguments('test1', 'test2', 'test3');
// [ 'test1', 'test2', 'test3' ]

console.log('\nFor ES6 Objects:');

const map1 = new Map([['property1', 'value1'], ['property2', 'value2']]);
const set1 = new Set(['test1', 'test2', 'test1', 'test3']);

const map1Str = Array.from(map1);
const set1Str = Array.from(set1);

console.log(map1Str);
// [ [ 'property1', 'value1' ], [ 'property2', 'value2' ] ]
console.log(set1Str);
// [ 'test1', 'test2', 'test3' ]
