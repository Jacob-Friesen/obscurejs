#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

console.log('const keyword implementation:');
const A = 2;

console.log(A);// 2
A = 3;// Some environments like Firefox may throw an error here
console.log(A);// 2

const OBJECT_A = {
  property1: 'value1',
  property2: 'value2'
};

console.log(OBJECT_A);// { property1: 'value1', property2: 'value2' }
OBJECT_A = {};// Some environments like Firefox may throw an error here
console.log(OBJECT_A);// { property1: 'value1', property2: 'value2' }
OBJECT_A.property1 = 'new value';
console.log(OBJECT_A);// { property1: 'new value', property2: 'value2' }

// Custom implementation
console.log('\nCustom implementation:');

var Constants = function(constants) {
    var self = {};

    self.add = function(name, value) {
      Object.defineProperty(self, name, {
          value: value,

          // This should be default values, but some environments could differ
          writable: false,
          configurable: false
      });
    };

    return self;
};

var CONSTANTS = Constants();
CONSTANTS.add('A', 2);

console.log(CONSTANTS.A);// 2
CONSTANTS.A = 3;
console.log(CONSTANTS.A);// 2

CONSTANTS.add('OBJECT_A', {
  property1: 'value1',
  property2: 'value2'
});

console.log(CONSTANTS.OBJECT_A);// { property1: 'value1', property2: 'value2' }
CONSTANTS.OBJECT_A = {};// Some environments like Firefox may throw an error here
console.log(CONSTANTS.OBJECT_A);// { property1: 'value1', property2: 'value2' }
CONSTANTS.OBJECT_A.property1 = 'new value';
console.log(CONSTANTS.OBJECT_A);// { property1: 'new value', property2: 'value2' }
