#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('Not finite value checking:');

var divide = function(x, y) {
  return x/y;
}

var validOr0 = function(callback) {
  var result = callback();
  if (isNaN(result)) {
    return 0;
  }
  return result;
}

console.log(validOr0(function() {
  return divide(4, 2);
}));
// 2

console.log(validOr0(function() {
  return divide(1, 'not number');
}));
// 0

console.log(validOr0(function() {
  return divide(1, 0);
}));
// Infinity

console.log('\nFinite value checking:');

var validOr0 = function(callback) {
  var result = callback();
  if (isNaN(result) || !isFinite(result)) {
    return 0;
  }
  return result;
}

console.log(validOr0(function() {
  return divide(4, 2);
}));
// 2

console.log(validOr0(function() {
  return divide(1, 'not number');
}));
// 0

console.log(validOr0(function() {
  return divide(1, 0);
}));
// 0
