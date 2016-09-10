#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var cars = {
  'miata': { hp: 155, weight: 2332 },
  'elise': { hp: 217, weight: 2041 },
  'Romeo 4C': { hp: 237, weight: 2456 }
};

var mapValues = function(obj, callback) {
  // Prevent in-place modification.
  var newObj = {};

  for (var key in obj) {
    newObj[key] = callback(obj[key]);
  }

  return newObj;
};

var mapKeys = function(obj, callback) {
  // Prevent in-place modification.
  var newObj = {};

  for (var key in obj) {
    newObj[callback(obj[key])] = obj[key];
  }

  return newObj;
};

// The mapValues example
console.log('mapValues example:');

var getWeightToPower = function(cars) {
  return mapValues(cars, function(car) {
    return Math.round(car.weight/car.hp);
  });
};

console.log(getWeightToPower(cars));
// { miata: 15, elise: 9, 'Romeo 4C': 10 }
 
// The mapKeys example
console.log('mapKeys example:');

var getWeightToPowerKeys = function(cars) {
  return mapKeys(cars, function(car) {
    return Math.round(car.weight/car.hp);
  });
};

console.log(getWeightToPowerKeys(cars));
// { '9': { hp: 217, weight: 2041 },
//   '10': { hp: 237, weight: 2456 },
//   '15': { hp: 155, weight: 2332 } }
