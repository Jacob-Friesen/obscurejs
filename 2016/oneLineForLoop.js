#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// Single line for loops for contains
console.log('Contains example:');

var contains = function(arr, value) {
  var i = 0;
  for (; i < arr.length && arr[i] !== value; i += 1);
  return i < arr.length;
};

var arr = [1,2,3,4];
console.log(contains(arr, 0));// false
console.log(contains(arr, 1));// true
console.log(contains(arr, 3));// true
console.log(contains(arr, 5));// false

// Single line for loops for contains
console.log('\nFind Max Example:');

var findMax = function(arr, value) {
  var i = 0,
      max = Number.MIN_VALUE;
  for (; i < arr.length; max = max < arr[i] ? arr[i] : max, i += 1);
  return max;
};

console.log(findMax([1,2,3,4]));// 4
console.log(findMax([5,1,8,2]));// 8
console.log(findMax([1,1,1,1]));// 1
console.log(findMax([10,2,5,9]));// 10
