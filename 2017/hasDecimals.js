#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

const hasDecimals = function(number) {
  return number % 1 !== 0;
}

console.log(hasDecimals(5.22));
// true
console.log(hasDecimals(41.00001));
// true
console.log(hasDecimals(0));
// false
console.log(hasDecimals(42));
// false

const hasDecimals2 = function(number) {
  const result = number % 1;
  return !isNaN(result) && result !== 0;
}

console.log('\nWith not a number checking:');
console.log(hasDecimals2(null));
// false
console.log(hasDecimals2(undefined));
// false
console.log(hasDecimals2({}));
// false
console.log(hasDecimals2('test'));
// false
console.log(hasDecimals2(2.22));
// true
console.log(hasDecimals2(new Number(2.22)));
// true
