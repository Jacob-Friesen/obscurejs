#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var groupBy = function(array, property) {
  var obj = {};

  array.forEach(function(element) {
    var evaluated = element[property];
    if (typeof property !== 'string') {
      evaluated = property(element);
    }

    obj[evaluated] = (obj[evaluated] || []).concat(element);
  });

  return obj;
};

// Property based example
console.log('Weight class example:');

var cars = [
  { name: 'miata', hp: 155, weight: 2332 },
  { name: 'elise', hp: 217, weight: 2041 },
  { name: 'Supra RZ', hp: 320, weight: 3285 }
];

var getWeightClass = function(cars) {
  return groupBy(cars, function(car) {
    return Math.round(car.weight/1000) * 1000;
  });
};

console.log(getWeightClass(cars));
// { '2000': 
//    [ { name: 'miata', hp: 155, weight: 2332 },
//      { name: 'elise', hp: 217, weight: 2041 } ],
//   '3000': [ { name: 'Supra RZ', hp: 320, weight: 3285 } ] }

// Property extraction example
console.log('\nhp extraction example:');
console.log(groupBy(cars, 'hp'));
// { '155': [ { name: 'miata', hp: 155, weight: 2332 } ],
//   '217': [ { name: 'elise', hp: 217, weight: 2041 } ],
//   '320': [ { name: 'Supra RZ', hp: 320, weight: 3285 } ] }

// Property based example
console.log('\nProperty based example:');
console.log(groupBy(['one', 'two', 'three'], 'length'));
// { '3': [ 'one', 'two' ], '5': [ 'three' ] }
