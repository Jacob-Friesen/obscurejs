#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.info('Operations without Reflect:');

const obj = {
  property1: 'value1',
  property2: 'value2',
};

delete obj.property1;
Object.preventExtensions(obj);

try {
  obj.property3 = 'value3'
} catch(e) {
  console.log(e.message);
}

console.log(obj);
// { property2: 'value2' }

console.log('\nOperations with Reflect:');

const obj2 = {
  property1: 'value1',
  property2: 'value2',
};

Reflect.deleteProperty(obj2, 'property1');
Reflect.preventExtensions(obj2);

const succeeded = Reflect.set(obj2, 'property3', 'value3');
if (succeeded !== true) {
  console.log('Failed to set "property3", obj is not extensible');
}

console.log(obj2);
// { property2: 'value2' }
