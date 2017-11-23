#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// push: to end
// unshift: to beggining
// pop: delete and return from end
// shift: delete and return from beggining
// splice: delete an return and optionally add

console.log('Shift and Pop:');

// Shift first to end
const arr1 = [4,1,2,3];

arr1.push(arr1.shift());
console.log(arr1);
// [ 1, 2, 3, 4 ]

// Shift last to start
const arr2 = [2,3,4,1];

arr2.unshift(arr2.pop());
console.log(arr2);
// [ 1, 2, 3, 4 ]

console.log('\nArray Moving:');

// Shift 2nd to 4rd (Get and remove 2nd, move to first)
const arr3 = [1,4,2,3,5];

arr3.splice(3, 0, arr3.splice(1, 1)[0]);
console.log(arr3);
// [ 1, 2, 3, 4, 5 ]

function arrayMove(arr, from, to) {
    // Slice makes it non-mutable
    arr = arr.slice();
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr;
}

const arr4 = [1,4,2,3,5];
console.log(arrayMove(arr4, 1, 3));
// [ 1, 2, 3, 4, 5 ]

const arr5 = [2,3,4,5,1];
console.log(arrayMove(arr5, 4, 0));
// [ 1, 2, 3, 4, 5 ]

const arr6 = [5,1,2,3,4];
console.log(arrayMove(arr6, 0, 4));
// [ 1, 2, 3, 4, 5 ]

console.log('\nArray Moving (More than one element):');

function arrayMove2(arr, from, to, amount = 1) {
    // Slice makes it non-mutable
    arr = arr.slice();
    arr.splice.apply(arr, [to, 0].concat(arr.splice(from, amount)));
    return arr;
}

const arr7 = [1,4,5,2,3];
console.log(arrayMove2(arr7, 1, 3, 2));
// [ 1, 2, 3, 4, 5 ]


