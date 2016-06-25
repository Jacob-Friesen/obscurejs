#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var arr = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15]
];

// No early stopping
console.log('\nWithout early stopping:');

var findCoordinate = function(arr, value) {
  var coordinate = { x: -1, y: -1 };
  arr.forEach(function(subArr, arrIndex) {
    subArr.forEach(function(element, subArrIndex) {
      if (element === value) {
        coordinate = { x: arrIndex, y: subArrIndex };
      }
    });
  });

  return coordinate;
};

console.log(findCoordinate(arr, 1));// { x: 0, y: 0 }
console.log(findCoordinate(arr, 15));// { x: 2, y: 4 }
console.log(findCoordinate(arr, 8));// { x: 1, y: 2 }

// With label based exit
console.log('\nUsing a length elimination strategy (not recommended):');

var findCoordinate = function(arr, value) {
  var coordinate = { x: -1, y: -1 };
  arr = arr.slice();

  arr.forEach(function(subArr, arrIndex) {
    subArr = subArr.slice();
    subArr.forEach(function(element, subArrIndex) {
      coordinate = { x: arrIndex, y: subArrIndex };
      // console.log(element); // Uncomment this to confirm that it stops early
      if (element === value) {
        arr.length = 0;
        subArr.length = 0;
      }
    });
  });

  return coordinate;
};

console.log(findCoordinate(arr, 1));// { x: 0, y: 0 }
console.log(findCoordinate(arr, 15));// { x: 2, y: 4 }
console.log(findCoordinate(arr, 8));// { x: 1, y: 2 }

// With label based exit
console.log('\nUsing a some based strategy:');

arr = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15]
];

var findCoordinate = function(arr, value) {
  var coordinate = { x: -1, y: -1 };

  arr.some(function(subArr, arrIndex) {
    return subArr.some(function(element, subArrIndex) {
      // console.log(element); // Uncomment this to confirm that it stops early
      coordinate = { x: arrIndex, y: subArrIndex };
      return element === value;
    });
  });

  return coordinate;
};

console.log(findCoordinate(arr, 1));// { x: 0, y: 0 }
console.log(findCoordinate(arr, 15));// { x: 2, y: 4 }
console.log(findCoordinate(arr, 8));// { x: 1, y: 2 }

