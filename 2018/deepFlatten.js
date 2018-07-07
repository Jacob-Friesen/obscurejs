'use strict';

console.log('Normal flatten');

function flatten(arr) {
  return [].concat(...arr);
}

function deepFlatten(arr) {
  return arr.map((element) => {
    if (element instanceof Array) {
      return deepFlatten(element);
    }
    return element;
  });

  return flatten(result);
}

const arr1 = [1,[2, [3, [4]]], 5];

console.log(flatten(arr1));
// [ 1, 2, [ 3, [ 4 ] ], 5 ]


console.log('\nDeep flatten');

console.log(deepFlatten(arr1));
// [ 1, 2, 3, 4, 5 ]
