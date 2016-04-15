#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var vehicles = [
  {name: 'mx-5', type: 'car', hp: 152},
  {name: 'ninja', type: 'motorcyle', hp: 300},
  {name: 'enzo', type: 'car', hp: 660}
];

// Utility function
var where =  function(array, checkObj) {
  var results = [];

  array.forEach(function(obj) {
    // No deep equals. This is here to just simulate a where function.
    for (var name in checkObj) {
      if (obj[name] === checkObj[name]) {
        results.push(obj);
      }
    }
  });

  return results;
};

// Without objOf
console.log('Without objOf:');

var statsFor = function(arr, property, value) {
  var obj = {};
  obj[property] = value;
  var vehicle = where(arr, obj)[0];
  
  // omit could be used here if it was available.
  return {
    type: vehicle.type,
    hp: vehicle.hp
  };
};
console.log(statsFor(vehicles, 'name', 'ninja'));// { type: 'motorcyle', hp: 300 }

// With objOf
console.log('\nWith objOf:');

var objOf = function(property, value) {
  var obj = {};
  obj[property] = value;
  return obj;
};

var statsFor = function(arr, property, value) {
  var vehicle = where(arr, objOf(property, value))[0];

  // omit could be used here if it was available.
  return {
    type: vehicle.type,
    hp: vehicle.hp
  };
};
console.log(statsFor(vehicles, 'name', 'ninja'));// { type: 'motorcyle', hp: 300 }

// With objOf extended
console.log('\nWith objOf extended:');

var objOf = function(property, value, obj) {
  var obj = obj || {};
  obj[property] = value;
  return obj;
};

var statsFor = function(arr, property, value) {
  var vehicle = where(arr, objOf(property, value))[0];

  // omit could be used here if it was available.
  return {
    type: vehicle.type,
    hp: vehicle.hp
  };
  return objOf(hp, vehicle.hp, objOf(type, vehicle.type));
};
console.log(statsFor(vehicles, 'name', 'ninja'));// { type: 'motorcyle', hp: 300 }
