#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

function ObjectA(value) {
  this.property1 = value;
}
ObjectA.prototype.property2 = 'value2';


function new_(constructor) {
  const o = {};
  const args = [].slice.call(arguments, 1);
  constructor.apply(o, args);
  Object.setPrototypeOf(o, constructor.prototype);

  return o;
}

let objectA1 = new ObjectA('value1');
let objectA2 = new_(ObjectA, 'value1');

console.log(objectA1);
// Object A { property1: 'value1' }
console.log(objectA1.property2);
// value 2
console.log(objectA1 instanceof ObjectA);
// true
console.log(objectA1.constructor);
// [Function: ObjectA]


console.log(objectA2);
// Object A { property1: 'value1' }
console.log(objectA1.property2);
// value 2
console.log(objectA2 instanceof ObjectA);
// true
console.log(objectA1.constructor);
// [Function: ObjectA]

