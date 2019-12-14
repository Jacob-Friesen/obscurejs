'use strict';
const _ = require('lodash');

const cars = [
  { id: 'miata', hp: 155, weight: 2400 },
  { id: '4c', hp: 237, weight: 2465 },
  { id: 'elise', hp: 217, weight: 2000 }
];

function keyBy(arr, propertyName) {
  const obj = {};

  for (const ele of arr) {
    obj[ele[propertyName]] = ele;
  }

  return obj;
}

const carIds = keyBy(cars, 'id');

console.log('Cars found (keyBy)');
console.log('miata:', 'miata' in carIds);
console.log('elise:', 'elise' in carIds);
console.log('ferrari:', 'ferrari' in carIds);
// miata: true
// elise: true
// ferrari: false

// Basic comparison to make sure the results are the same
const carIds2 = _.keyBy(cars, 'id');

console.log('\nCars found (_.keyBy)');
console.log('miata:', 'miata' in carIds2);
console.log('elise:', 'elise' in carIds2);
console.log('ferrari:', 'ferrari' in carIds2);
// miata: true
// elise: true
// ferrari: false