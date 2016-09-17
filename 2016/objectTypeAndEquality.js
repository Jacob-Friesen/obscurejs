#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';
var _ = require('lodash');

var Car = function() {
  this.name = 'miata';
  this.hp = 155;
};
var car1 = new Car();

var car2 = {
  name: 'miata',
  hp: 155
};
var car3 = {
  name: 'miata',
  hp: 155
};

console.log('Initial objects:');
console.log(car1, car2, car3);
// { name: 'miata', hp: 155 }
// { name: 'miata', hp: 155 }
// { name: 'miata', hp: 155 }

console.log('\nReference comparison:');
// Does not work since objects are compared by reference
console.log(car1 == car2, car2 == car3, car2 === car3);
// false false false

console.log('\nLodash equality comparison:');
console.log(_.isEqual(car1, car2));
// false
console.log(_.isEqual(car2, car3));
// true

console.log('\nObjects instanceof properties');
console.log(car1 instanceof Car);
// true
console.log(car2 instanceof Car);
// false
console.log(car3 instanceof Car);
// false

console.log('\nObjects typeof properties');
console.log(typeof car1, typeof car2, typeof car3);
// object object object
