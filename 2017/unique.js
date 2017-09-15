#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('Unique value filtering (without callback):');

// What unique() looks like with no callback support:
// function unique(array) {
//   const newArray = [];

//   // A map cannot be used since there may be less items in the new array
//   array.forEach(function(element) {
//     let isDuplicate = false;
//     for (let index = 0; index < newArray.length && isDuplicate === false; index += 1) {
//       isDuplicate = element === newArray[index];
//     }

//     if (isDuplicate === false) {
//       newArray.push(element);
//     }
//   });

//   return newArray;
// }

function unique(array, callback) {
  const newArray = [];
  const hasCallback = typeof callback === 'function';

  // A map cannot be used since there may be less items in the new array
  array.forEach(function(element, index) {
    let isDuplicate = false;
    for (let index = 0; index < newArray.length && isDuplicate === false; index += 1) {
      if (hasCallback === true) {
        isDuplicate = callback(element, newArray[index]) === true;
      } else {
        isDuplicate = element === newArray[index];
      }
    }

    if (isDuplicate === false) {
      newArray.push(element);
    }
  });

  return newArray;
}

console.log(unique([1, 2, 2, 3, 3, 4, 5]));
// [ 1, 2, 3, 4, 5 ]
console.log(unique([5, 4, 5, 3, 2, 4, 1]));
// [ 5, 4, 3, 2, 1 ]
console.log(unique(['test1', 'test1', 'test2']));
// [ 'test1', 'test2' ]

// Extra tests for the simple uniq (object references)
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
console.log(unique([yesterday, yesterday, today, yesterday, tomorrow, tomorrow]));
// This will depend on what the current day is:
// [ 2017-09-14T19:32:02.739Z,
//   2017-09-15T19:32:02.739Z,
//   2017-09-16T19:32:02.739Z ]

// This should only compare via reference, nothing else
const a = { prop1: 1 };
const b = { prop1: 1 };
const c = { prop1: 1 };
console.log(unique([a, b, a, a, c, b]));
// Separate references so separate values should be used
// [ { prop1: 1 }, { prop1: 1 }, { prop1: 1 } ]

console.log('\nUnique value filtering (with callback):');

// Represent having multiple models of the same car
const cars = [
  { name: 'miata', hp: '115' },
  { name: 'miata', hp: '133' },
  { name: 'elise', hp: '217' },
  { name: 'miata', hp: '155' },
  { name: 'elise', hp: '189' },
];

// The objective is to only get the types of cars in the system
const uniqueCars = unique(cars, function(carA, carB) {
  return carB !== undefined && carA.name === carB.name;
});
console.log(uniqueCars);
// [ { name: 'miata', hp: '115' },
//   { name: 'elise', hp: '217' } ]
