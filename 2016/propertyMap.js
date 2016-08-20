#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var propertyMap = function(arr) {
  var result = {};

  arr.forEach(function(ele) { 
    Object.keys(ele).forEach(function(key) {
      result[key] = (result[key] || []).concat(ele[key]);
    });
  });

  return result;
};

var cars = [{
  car: 'miata',
  hp: 155,
  weight: 2332
}, {
  car: 'elise',
  hp: 217,
  weight: 2041
}];

console.log(propertyMap(cars));
// { car: [ 'miata', 'elise' ],
//   hp: [ 155, 217 ],
//   weight: [ 2332, 2041 ] }
