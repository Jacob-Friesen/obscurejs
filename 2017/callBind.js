#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.info('This replacement examples:');

function ObjectA(x, y) {
  this.x = x;
  this.y = y;

  this.sum = function() {
    return this.x * this.y;
  }
};

const objectA = new ObjectA(5, 4);
console.log(objectA.sum());
// 20
console.log(objectA.sum.call({ x: 5, y: 4 }));
// 20

const sumByObject = Function.prototype.call.bind(objectA.sum);
console.log(sumByObject({ x: 5, y: 4 }));
// 20

const sum = function(x, y) {
  return sumByObject({ x: x, y: y });
  // In some modern browsers and Node.js:
  // sumByObject({ x, y });
};
console.log(sum(5, 4));
// 20

console.info('\nFunction borrowing example:');

function sumGeneral() {
  const reduce = Function.prototype.call.bind(Array.prototype.reduce);
  return reduce(arguments, function(sum, value) {
    return sum + value;
  });
}

console.log(sumGeneral(2));
// 2
console.log(sumGeneral(1, 2));
// 3
console.log(sumGeneral(6, 9, 7));
// 22
