'use strict';

const _ = require('lodash');

const cars = [
  { id: 'miata', hp: 155 },
  { id: '4c', hp: 237 },
  { id: 'elice', hp: 217 }
];
const uniqueCars = new Set();
uniqueCars.add(cars[0].id);
uniqueCars.add(cars[1].id);
uniqueCars.add(cars[2].id);
uniqueCars.add(cars[0].id);
uniqueCars.add(cars[1].id);
const carsById = new Map();
carsById.set(cars[0].id, cars[0]);
carsById.set(cars[1].id, cars[1]);
const buffer = new ArrayBuffer(8);
// Get 4 bytes from the start
const view = new DataView(buffer, 0, 4);

console.log('Custom size:');

console.log(cars.length);
// 3
console.log(Object.keys(cars[0]).length);
// 2
console.log(cars[0].id.length);
// 5
console.log(uniqueCars.size);
// 3
console.log(carsById.size);
// 2
console.log(buffer.byteLength);
// 8
console.log(view.byteLength);
// 4

console.log('\nSize With Lodash:');

console.log(_.size(cars));
// 3
console.log(_.size(cars[0]));
// 2
console.log(_.size(cars[0].id));
// 5
console.log(_.size(uniqueCars));
// 3
console.log(_.size(carsById));
// 2

// Size is not calculated in these cases:
console.log('Size is not calculated in these cases:');
console.log(_.size(buffer));
console.log(_.size(view));
console.log(_.size(null));
console.log(_.size());
console.log(_.size(true));
console.log(_.size(new Error('test')));
console.log(_.size(new Function()));
console.log(_.size(100));
console.log(_.size(Infinity));
console.log(_.size(NaN));
console.log(_.size(new RegExp('TEST', 'g')));
console.log(_.size(Symbol('TEST')));
// 0

console.log('\nSize With Custom Function:');

function size(value) {
  if (typeof value === 'string') {
    return value.length;
  }
  // Note that the typeof null is object
  if (typeof value === 'object' && value !== null) {
    if ('size' in value) {
      return value.size;
    }
    if ('length' in value) {
      return value.length;
    }
    if ('byteLength' in value) {
      return value.byteLength;
    }
    return Object.keys(value).length;
  }

  return 0;
}

console.log(size(cars));
// 3
console.log(size(cars[0]));
// 2
console.log(size(cars[0].id));
// 5
console.log(size(uniqueCars));
// 3
console.log(size(carsById));
// 2
console.log(size(buffer));
// 8
console.log(size(view));
// 4

// Size is not calculated in these cases:
console.log('Size is not calculated in these cases:');
console.log(size(null));
console.log(size());
console.log(size(true));
console.log(size(new Error('test')));
console.log(size(new Function()));
console.log(size(100));
console.log(size(Infinity));
console.log(size(NaN));
console.log(size(new RegExp('TEST', 'g')));
console.log(size(Symbol('TEST')));
// 0

