#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('prototype example:');

const ObjectA = function() {};
ObjectA.prototype.property1 = 'value1';

// Inherit (The constructor was not updated but is unused here)
const ObjectAChild = function() {};
ObjectAChild.prototype = Object.create(ObjectA.prototype);
ObjectAChild.prototype.property2 = 'value2';

let objectA = new ObjectA();
console.log(objectA.property1);
// value 1

let objectAChild = new ObjectAChild();
console.log(objectAChild.property1, objectAChild.property2);
// value 1 value 2

ObjectA.prototype.property1 = 'another value';

console.log(objectA.property1, objectAChild.property1);
// another value another value

console.log('\n__proto__ and similar example:');
console.log(objectAChild.__proto__);
// { property2: 'value2' }
console.log(ObjectAChild.prototype);
// { property2: 'value2' }
console.log(Object.getPrototypeOf(objectAChild));
// { property2: 'value2' }
