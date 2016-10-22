#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// const example
console.log('Example of const limitations:');

const obj = { property1: 'value1' };
// some implementations will error out, some will just not assign to it.
try { 
  obj = { property2: 'value2' };
} catch (e) {}
console.log(obj);
// { property1: 'value1' }

obj.property1 = 'value2';
console.log(obj);
// { property1: 'value2' }

// Object.freeze base example
console.log('\nObject.freeze base example:');

const obj2 = Object.freeze({ property1: 'value1' });
// some implementations will error out, some will just not assign to it.
try { 
  obj2.property1 = 'value2';
} catch (e) {}

console.log(obj2);
// { property1: 'value1' }

// Object.freeze array example
console.log('\nObject.freeze array example issue:');

const arr = Object.freeze([{ property1: 'value1' }, { property2: 'value2' }]);
// some implementations will error out, some will just not assign to it.
try { 
  arr[0] = { property2: 'value2' };
} catch (e) {}
arr[0].property1 = 'value2';

console.log(arr);
// [ { property1: 'value2' }, { property2: 'value2' } ]

console.log('\nObject.freeze array example fixed:');

const arr2 = [{ property1: 'value1' }, { property2: 'value2' }].map(Object.freeze);

// some implementations will error out, some will just not assign to it.
try { 
  arr2[0].property1 = 'value2';
} catch (e) {}

console.log(arr2);
// [ { property1: 'value1' }, { property2: 'value2' } ]
