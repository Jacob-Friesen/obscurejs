#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('Function Constructor example:');

var runInADifferentScope = function() {
  function ObjectA() {
    this.property1 = 'test';
    this.property2 = 'test';
  }

  var objectA = new ObjectA();

  console.log('property1', objectA.property1);

  return objectA;
}

var objectA = runInADifferentScope();

console.log('objectA created by:', objectA.constructor.name);
// objectA created by: ObjectA
console.log(objectA.constructor.toString());
// function ObjectA() {
//     this.property1 = 'test';
//     this.property2 = 'test';
//   }

console.log('\nModule Pattern example:');

var runInADifferentScope = function() {
  function ObjectA() {
    var obj = {};

    obj.property1 = 'test';
    obj.property2 = 'test';

    return obj;
  }

  return new ObjectA();
}

var objectA = runInADifferentScope();
console.log('objectA created by:', objectA.constructor.name);
// objectA created by: Object
console.log(objectA.constructor.toString());
// function Object() { [native code] }

console.log('\nES6 Class example:');

var runInADifferentScope = function() {
  class ObjectA {
    constructor() {
      this.property1 = 'test';
      this.property2 = 'test';
    }
  }

  return new ObjectA();
}

var objectA = runInADifferentScope();
console.log('objectA created by:', objectA.constructor.name);
// objectA created by: ObjectA
console.log(objectA.constructor.toString());
// class ObjectA {
//     constructor() {
//       this.property1 = 'test';
//       this.property2 = 'test';
//     }
//   }
