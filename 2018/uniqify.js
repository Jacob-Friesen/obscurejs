'use strict';
console.info('Basic strategy for lists of primitives:');

const arr = [1, 4, 10, 4, 4, 7, 8, 10];

const uniqueValues  = Array.from(new Set(arr));
console.info(uniqueValues);
// [ 1, 4, 10, 7, 8 ]

console.info('\nDoes not work for object comparisons:');

const objects = [
  { property1: 'value1' },
  { property2: 'value2' },
  { property3: 'value3' },
  { property1: 'value1' },
];

const uniqueObjects  = Array.from(new Set(objects));
console.info(uniqueObjects);
// [ { property1: 'value1' },
//   { property2: 'value2' },
//   { property3: 'value3' },
//   { property1: 'value1' } ]

console.info('\nUnless arrays use object references:');

const obj1 = { property1: 'value1' },
  obj2 = { property2: 'value2' },
  obj3 = { property3: 'value3' };

const objects2 = [obj1, obj2, obj1, obj3];

const uniqueObjects2  = Array.from(new Set(objects2));
console.info(uniqueObjects2);
// [ { property1: 'value1' },
//   { property2: 'value2' },
//   { property3: 'value3' } ]
