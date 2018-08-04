'use strict';

const _ = require('lodash');

const cars = [
  { id: 'miata', hp: 155, weight: 2400 },
  { id: '4c', hp: 237, weight: 2465 },
  { id: 'elice', hp: 217, weight: 2000 }
];

console.log('Zip Object (Using Lodash):');

console.log(_.zipObject(
  _.map(cars, 'id'),
  _.map(cars, 'weight'),
));
// { miata: 2400, '4c': 2465, elice: 2000 }

console.log('\nZip Object (No Libraries):');

function zipObject(keys, values) {
  const obj = {};

  // Assuming the lengths of keys always equals the length of values to simplify the example.
  keys.forEach((key, index) => {
    obj[key] = values[index];
  })

  return obj;
}

console.log(zipObject(
  cars.map((car) => car.id),
  cars.map((car) => car.weight),
));
